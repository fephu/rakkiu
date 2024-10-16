import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ShippingExchange = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <h1 className="text-2xl uppercase font-semibold tracking-tight">
          Shopping & Exchange
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-semibold">SHIPPING</h1>
            <span className="text-sm">
              Goods will be dispatched on regular working days, Monday to
              Fridays.
            </span>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <span>
              Vietnam orders are shipped via GHTK, J&T, Nasco Express.
            </span>
            <span>
              International orders are shipped via EMS or UPS/DHL/FEDEX shipping
              service.
            </span>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h1 className="uppercase font-semibold">SHIPPING TABLE</h1>
            <span>Vietnam</span>
            <span>Hanoi 20.000~30.000 : 1 – 2 working days</span>
            <span>Other Cities 30.000~50.000 : 3 – 5 working days</span>
            <div className="flex gap-1">
              <span className="text-red-500 text-lg">*</span>
              Please contact us at rakkiu.official@gmail.com or direct us via
              instagram, facebook if your parcel has not been received at its
              expected.
            </div>
            <span>International</span>
            <span>
              Please contact us at rakkiu.official@gmail.com or direct us via
              instagram, facebook for more detail shipping cost.
            </span>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h1 className="uppercase font-semibold">IMPORTANT NOTE</h1>
            <span>- Exchanges</span>
            <span className="leading-8">
              If you’d like to exchange one item for a different size, you must
              return the original item first and then place a new order. It must
              be done within 3 days of original shipment date. You will be
              refunded for the original item in accordance with our usual return
              policy. Each product can only be exchanged once.
            </span>
            <span>- Return Policy</span>
            <span className="leading-8">
              We confirmed accept return / exchange for products to be defective
              (color, size, damage) at the time of delivery. Please send us a
              return request to our email mentioned below or direct us via
              instagram, facebook. It must be done within 3 days of original
              shipment date. We do not accept any return requests after 3 days
              of delivery. Shipping and handling is not refundable and all sale
              items are final purchase. We reserve the right to reject returns
              violating our Return Policy. Please follow the guidelines below.
            </span>
            <span>- How to return</span>
            <div className="flex gap-1 text-xs items-center">
              <span className="text-red-500 text-lg">*</span>
              Please return your goods to the address below.
            </div>
            <span className="text-xs">
              No. 17, Alley 25 Trieu Viet Vuong Str., Nguyen Du Ward, Hai Ba
              Trung District, Ha Noi, Vietnam
            </span>
            <span className="leading-8">
              (International returns must be covered by the customer. We suggest
              using your local postal service or a courier. If returns are
              picked-up by us or buyer sends them as “bill-to-receiver”, we will
              deduct the return shipping fee from the total refund amount.)
            </span>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h1 className="uppercase font-semibold">REFUNDS</h1>

            <span className="leading-8">
              Payments will be refunded back to your account. Allow up to 5
              working days for processing upon receipt of your item and 4
              working days for the refund to clear into your account. Please
              note that only the amount for the original item is refundable.
            </span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShippingExchange;
