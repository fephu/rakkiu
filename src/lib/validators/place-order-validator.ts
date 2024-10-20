import { z } from "zod";

const phoneNumberRegex = /^(?:\+84|0)(?:3|5|7|8|9)\d{8}$/;

export const PlaceOrderValidator = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  phone: z
    .string()
    .regex(phoneNumberRegex, { message: "Phone number is not valid" }),
  email: z.string().email(),
  nameFb: z.string().min(1, { message: "Name of facebook is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  zipcode: z.string().optional(),
  notes: z.string().optional(),
});

export type TPlaceOrderValidator = z.infer<typeof PlaceOrderValidator>;
