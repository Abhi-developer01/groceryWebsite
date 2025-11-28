export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-start lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How the FreshMart app works
          </h2>
          <p className="mt-4 text-sm text-slate-700 sm:text-base">
            FreshMart is a dedicated online grocery delivery mobile application
            built for customers in India. The app lets you browse groceries,
            add items to your cart, choose your delivery address and pay
            securely online using Razorpay.
          </p>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Once your order is confirmed, our partner stores pack your items and
            a delivery partner brings them to your doorstep, typically within
            30–60 minutes depending on your location and time of day.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
          <ol className="space-y-3 text-sm text-slate-800">
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-50 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                1
              </span>
              <div>
                <p className="font-semibold">Browse groceries</p>
                <p className="text-slate-600">
                  Explore categories like fruits, vegetables, dairy, snacks,
                  household essentials and more.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-50 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                2
              </span>
              <div>
                <p className="font-semibold">Add items to cart</p>
                <p className="text-slate-600">
                  Select quantities and see transparent pricing before placing
                  your order.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-50 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                3
              </span>
              <div>
                <p className="font-semibold">Choose delivery address</p>
                <p className="text-slate-600">
                  Save and select delivery addresses such as home or office for
                  faster checkout.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-50 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                4
              </span>
              <div>
                <p className="font-semibold">Pay with Razorpay</p>
                <p className="text-slate-600">
                  Complete your purchase using Razorpay with UPI, cards, net
                  banking or wallets over secure, encrypted connections.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-50 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                5
              </span>
              <div>
                <p className="font-semibold">Delivery in 30–60 minutes</p>
                <p className="text-slate-600">
                  Orders are packed by partner stores and delivered to your
                  doorstep within the selected time window.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
