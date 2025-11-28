export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Contact & business details
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            FreshMart is an online grocery delivery service based in India.
            Please contact us for any questions related to your orders,
            payments or account.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:support@freshmart.in"
                className="text-emerald-700 hover:underline"
              >
                support@freshmart.in
              </a>
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:underline"
              >
                +91 9876543210
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> India
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">
            Support & escalation
          </h3>
          <p className="mt-2 text-xs text-slate-600">
            Our support team is available 24/7 via email and WhatsApp. If you
            face any issue with your order or payment, please contact us with
            your order ID and payment reference.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            We aim to resolve most issues within a reasonable time frame and
            will keep you informed about the status of your request.
          </p>
        </div>
      </div>
    </section>
  );
}
