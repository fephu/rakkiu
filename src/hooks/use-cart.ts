import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  discount: number;
  addItem: (product: Product) => void;
  increaseQuantity: (productId: string, size: string) => void;
  decreaseQuantity: (productId: string, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      discount: 0,

      addItem: (product) =>
        set((state) => {
          const isItemInCart = state.items.find(
            (cartItem) =>
              cartItem.product.id === product.id &&
              cartItem.product.size === product.size
          );

          if (isItemInCart) {
            const updatedCart = state.items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: (item.quantity as number) + 1 }
                : item
            );

            return {
              items: updatedCart,
              total: updatedCart.reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity: 1 }],
            total: state.total + product.price,
          };
        }),
      removeItem: (id, size) =>
        set((state) => {
          return {
            items: state.items.filter(
              (item) =>
                (item.product.id !== id && item.product.size !== size) ||
                (item.product.id !== id && item.product.size === size) ||
                (item.product.id === id && item.product.size !== size)
            ),
            total:
              state.total -
              (state.items.find((item) => item.product.id === id)?.product
                .price as number) *
                (state.items.find((item) => item.product.id === id)
                  ?.quantity as number),
          };
        }),
      increaseQuantity: (id, size) =>
        set((state) => {
          const updatedCart = state.items.map((item) =>
            item.product.id === id && item.product.size === size
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item
          );

          const cartTotal = updatedCart.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          );

          return { items: updatedCart, total: cartTotal };
        }),
      decreaseQuantity: (id, size) =>
        set((state) => {
          const isItemInCart = state.items.find(
            (cartItem) =>
              cartItem.product.id === id &&
              cartItem.quantity > 1 &&
              cartItem.product.size === size
          );
          if (isItemInCart) {
            const updatedCart = state.items.map((item) =>
              item.product.id === id && item.product.size === size
                ? { ...item, quantity: (item.quantity as number) - 1 }
                : item
            );

            const cartTotal = updatedCart.reduce(
              (total, { product, quantity }) =>
                total + product.price * quantity,
              0
            );

            return { items: updatedCart, total: cartTotal };
          }

          return {
            items: state.items.filter(
              (item) =>
                (item.product.id !== id && item.product.size !== size) ||
                (item.product.id !== id && item.product.size === size) ||
                (item.product.id === id && item.product.size !== size)
            ),
            total:
              state.total -
              (state.items.find((item) => item.product.id === id)?.product
                .price as number) *
                (state.items.find((item) => item.product.id === id)
                  ?.quantity as number),
          };
        }),
      clearCart: () => set({ items: [], total: 0, discount: 0 }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
