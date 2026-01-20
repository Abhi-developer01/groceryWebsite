export default function PoliciesSection() {
  return (
    <section
      id="policies"
      className="border-b border-slate-200 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Privacy Policy */}
        <div
          id="privacy-policy"
          className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Privacy Policy
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            This Privacy Policy explains how GenieZap ("we", "us", "our")
            collects, uses and protects personal information of users of our
            mobile app and website in India.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-semibold">Information we collect:</span> we
              may collect your name, contact details, delivery addresses, order
              history and limited device information to provide our services.
            </li>
            <li>
              <span className="font-semibold">Use of information:</span> we use
              this data to process orders, arrange delivery, provide customer
              support, improve our services and comply with legal obligations.
            </li>
            <li>
              <span className="font-semibold">Payments:</span> online payments
              are processed securely through Razorpay. Card and payment
              information is handled by Razorpay as per their policies and is
              not stored by GenieZap.
            </li>
            <li>
              <span className="font-semibold">Data sharing:</span> we may share
              necessary details with delivery partners and payment providers
              only for fulfilling your orders and processing payments.
            </li>
            <li>
              <span className="font-semibold">Contact:</span> for any privacy
              concerns, write to us at{" "}
              <a
                href="mailto:support@geniezap.in"
                className="text-emerald-700 hover:underline"
              >
                support@geniezap.in
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Refund & Cancellation Policy */}
        <div
  id="refund-cancellation-policy"
  className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
>
  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
    Refund & Cancellation Policy
  </h2>

  <p className="mt-3 text-sm text-slate-700">
    This policy outlines how cancellations, refunds, and returns are handled for
    orders placed through GenieZap.
  </p>

  <ul className="mt-3 space-y-2 text-sm text-slate-700">

    <li>
      <span className="font-semibold">Order Cancellation:</span>{" "}
      Customers may cancel their order before it is packed or dispatched.
      Cancellation availability may vary depending on the store and order stage.
      Please contact us as soon as possible to request a cancellation.
    </li>

    <li>
      <span className="font-semibold">Refunds:</span>{" "}
     <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 mt-2">
  <li>
    All eligible refunds will be processed to the original payment method used during purchase.
  </li>
  <li>
    Refunds are processed within <span className="font-semibold">5–7 business days</span> after approval.
  </li>
  <li>
    In some cases, banks or payment gateways may take additional time to reflect the refund.
  </li>
</ul>
    </li>

    <li>
      <span className="font-semibold">Quality Issues:</span>{" "}
      If you receive damaged, expired, or poor-quality products, please share
      clear photos and details within{" "}
      <span className="font-semibold">24 hours of delivery</span> so we can
      review and take appropriate action (replacement or refund).
    </li>

   

    <li>
      <span className="font-semibold">Contact for Refunds:</span>{" "}
      For any cancellation or refund request, email us at{" "}
      <a
        href="mailto:support@geniezap.in"
        className="text-emerald-700 hover:underline"
      >
        support@geniezap.in
      </a>{" "}
      or message us on WhatsApp at +91 9876543210.
    </li>

  </ul>
</div>


        {/* Terms & Conditions */}
        <div
          id="terms-and-conditions"
          className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Terms & Conditions
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            By using the GenieZap mobile application or website, you agree to
            the following terms and conditions.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-semibold">Service scope:</span> GenieZap
              provides a platform for customers in India to order groceries from
              partner stores and have them delivered.
            </li>
            <li>
              <span className="font-semibold">Account responsibility:</span>
              you are responsible for maintaining the confidentiality of your
              account details and for all activities that occur under your
              account.
            </li>
            <li>
              <span className="font-semibold">Pricing & availability:</span>
              product prices, offers and availability may vary by location and
              are subject to change. Final prices are shown before checkout.
            </li>
            <li>
              <span className="font-semibold">Payments:</span> online payments
              are processed via Razorpay. By completing a transaction, you agree
              to Razorpay&apos;s terms in addition to these terms.
            </li>
            <li>
              <span className="font-semibold">Liability:</span> while we aim to
              provide a reliable service, there may be delays or cancellations
              due to factors beyond our control. Our liability is limited to the
              value of the order in such cases.
            </li>
            <li>
              <span className="font-semibold">Changes to terms:</span> GenieZap
              may update these terms and policies from time to time. Updated
              versions will be made available within the app or on the website.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
