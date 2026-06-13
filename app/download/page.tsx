import Link from "next/link";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white">
              <img
                src={"/images/logo.png"}
                alt={`App logo`}
                className="h-84 w-full "
              />
            </div>
            <div>
              <img
                src={"/images/name.png"}
                alt={`App logo`}
                className="h-6 w-auto "
              />
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/" className="hover:text-emerald-700">
              Home
            </Link>
            {/* <Link href="/download" className="text-emerald-700">
              Download
            </Link> */}
            <Link href="/download" className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
              Download App
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 sm:p-12 ring-1 ring-slate-200 text-center">
          <div className="mb-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100">
              <img
                src={"/images/logo.png"}
                alt={`App logo`}
                className="h-16 w-16 "
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Download GenieZap
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Get the GenieZap grocery delivery app on your Android device
            </p>
          </div>

          <div className="mx-auto max-w-md space-y-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.grocery_app1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-xl"
            >
              <img
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-xs uppercase tracking-wider text-emerald-100">
                  Get it on
                </span>
                <span className="font-semibold">Google Play</span>
              </div>
            </a>

            <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                App Features
              </h2>
              <ul className="space-y-3 text-left text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                    ✓
                  </span>
                  <span>Order fresh groceries in a few taps</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                    ✓
                  </span>
                  <span>Fast delivery within 30–60 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                    ✓
                  </span>
                  <span>Secure payments via Razorpay</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                    ✓
                  </span>
                  <span>Live order tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                    ✓
                  </span>
                  <span>Available in selected cities across India</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 text-white">
              <p className="text-sm text-slate-300">
                iOS version coming soon. Stay tuned for updates!
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
