const benefits = [
  {
    title: "Fast delivery",
    description:
      "Groceries are typically delivered within 30–60 minutes, depending on your area and time of day.",
  },
  {
    title: "Fresh products",
    description:
      "We work with trusted local stores to supply fresh fruits, vegetables and daily essentials.",
  },
  {
    title: "Secure online payments (Razorpay)",
    description:
      "All online payments are handled securely via Razorpay with industry-standard encryption.",
  },
  {
    title: "Live order tracking",
    description:
      "Track your order status from confirmation to delivery right inside the app.",
  },
  {
    title: "24/7 support",
    description:
      "Get help any time through email or WhatsApp for order and payment queries.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="border-b border-slate-200 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Why choose GenieZap?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            GenieZap is designed for busy individuals and families who want
            reliable grocery delivery, transparent pricing and secure digital
            payments.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
