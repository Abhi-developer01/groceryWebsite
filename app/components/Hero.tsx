"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-slate-50 pb-12 pt-10 sm:pb-16 sm:pt-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
            GenieZap · Online Grocery Delivery App
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Groceries delivered fast to your doorstep.
          </h1>
          <p className="text-base text-slate-700 sm:text-lg">
            Order fresh groceries in a few taps. Browse items, add to cart, pay
            securely with Razorpay and get your order at your doorstep within
            30–60 minutes (depending on your location).
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                ✓
              </span>
              <span>Currently focused on selected cities in India.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-center text-xs font-semibold text-emerald-700">
                ✓
              </span>
              <span>Online payments processed securely via Razorpay.</span>
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button className="inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              <span className="text-lg">📱</span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-100">
                  Coming soon
                </span>
                <span>Download on Android</span>
              </div>
            </button>
            <button className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-black">
              <span className="text-lg">🍏</span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  Coming soon
                </span>
                <span>Download on iOS</span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-[230px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.55)]">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-200">
              <span>GenieZap</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px]">
                App preview
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/80 px-3 py-3">
                <div>
                  <p className="text-xs text-slate-300">Estimated delivery</p>
                  <p className="text-sm font-semibold text-white">10–15 mins</p>
                </div>
                <div className="rounded-xl bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
                  Live tracking
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-3">
                <p className="mb-2 text-xs font-medium text-slate-200">
                  Today&apos;s picks
                </p>
                <div className="space-y-2 text-[11px] text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Bananas (1kg)</span>
                    <span className="font-semibold">₹60</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Whole wheat bread</span>
                    <span className="font-semibold">₹40</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Milk (1L)</span>
                    <span className="font-semibold">₹70</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-2xl bg-emerald-500 px-3 py-3 text-xs text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-100">
                    Secure payment
                  </p>
                  <p className="text-sm font-semibold">Pay via Razorpay</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px]">
                  🔒 256-bit SSL
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
