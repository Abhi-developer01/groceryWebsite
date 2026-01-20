export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>© GenieZap 2025. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          <a href="#privacy-policy" className="hover:text-emerald-700">
            Privacy Policy
          </a>
          <a
            href="#refund-cancellation-policy"
            className="hover:text-emerald-700"
          >
            Refund & Cancellation Policy
          </a>
          <a
            href="#terms-and-conditions"
            className="hover:text-emerald-700"
          >
            Terms & Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
}
