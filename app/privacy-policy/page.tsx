// import Link from "next/link";

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white">
//               <img
//                 src={"/images/logo.png"}
//                 alt={`App logo`}
//                 className="h-84 w-full "
//               />
//             </div>
//             <div>
//               <img
//                 src={"/images/name.png"}
//                 alt={`App logo`}
//                 className="h-6 w-auto "
//               />
//             </div>
//           </Link>
//           <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
//             <Link href="/" className="hover:text-emerald-700">
//               Home
//             </Link>
//             <Link href="/privacy-policy" className="text-emerald-700">
//               Privacy Policy
//             </Link>
//           </nav>
//         </div>
//       </header>

//       <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-200">
//           <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//             Privacy Policy
//           </h1>
//           <p className="mt-4 text-base text-slate-700">
//             This Privacy Policy explains how GenieZap ("we", "us", "our")
//             collects, uses and protects personal information of users of our
//             mobile app and website in India.
//           </p>

//           <div className="mt-8 space-y-6">
//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Information we collect
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 We may collect your name, contact details, delivery addresses, order
//                 history and limited device information to provide our services.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Location Data
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 We collect and use location information to provide delivery and address-related services.
//               </p>
//               <ul className="mt-3 list-disc space-y-2 pl-6 text-base text-slate-700">
//                 <li>
//                   <span className="font-semibold">What we collect:</span> Approximate
//                   location (city/area) and precise location (GPS) only when permission is
//                   granted.
//                 </li>
//                 <li>
//                   <span className="font-semibold">Why we collect it:</span> To detect your
//                   delivery address, show available products/services in your area,
//                   calculate delivery availability, and improve delivery accuracy.
//                 </li>
//                 <li>
//                   <span className="font-semibold">How it is used:</span> Used only within the
//                   app for order and delivery services and not used for advertising
//                   purposes.
//                 </li>
//                 <li>
//                   <span className="font-semibold">Sharing:</span> Location data may be shared
//                   with delivery partners only to complete your order. We do not sell
//                   location data.
//                 </li>
//                 <li>
//                   <span className="font-semibold">Control:</span> Users can deny or disable
//                   location permission anytime from device settings.
//                 </li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Use of information
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 We use this data to process orders, arrange delivery, provide customer
//                 support, improve our services and comply with legal obligations.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Payments
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 Online payments are processed securely through Razorpay. Card and payment
//                 information is handled by Razorpay as per their policies and is
//                 not stored by GenieZap.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Data sharing
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 We may share necessary details with delivery partners and payment providers
//                 only for fulfilling your orders and processing payments.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold text-slate-900">
//                 Contact
//               </h2>
//               <p className="mt-2 text-base text-slate-700">
//                 For any privacy concerns, write to us at{" "}
//                 <a
//                   href="mailto:support@geniezap.in"
//                   className="text-emerald-700 hover:underline"
//                 >
//                   support@geniezap.in
//                 </a>
//               </p>
//             </section>
//           </div>

//           <div className="mt-8 border-t border-slate-200 pt-6">
//             <Link
//               href="/"
//               className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
//             >
//               ← Back to Home
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | GenieZap",
  description: "Privacy Policy for GenieZap",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl">
              <img
                src="/images/logo.png"
                alt="GenieZap Logo"
                className="w-full"
              />
            </div>

            <div>
              <img
                src="/images/name.png"
                alt="GenieZap"
                className="h-6 w-auto"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/" className="hover:text-emerald-700">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-emerald-700">
              Privacy Policy
            </Link>
            <Link href="/download" className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
              Download App
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Last Updated: June 2026
          </p>

          <p className="mt-6 text-base text-slate-700">
            This Privacy Policy explains how GenieZap ("GenieZap", "we", "us",
            "our") collects, uses, stores, and protects information when you
            use our mobile application, website, and related services.
          </p>

          <div className="mt-8 space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Information We Collect
              </h2>

              <p className="mt-2 text-base text-slate-700">
                We may collect the following information:
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address (if provided)</li>
                <li>Delivery addresses</li>
                <li>Order history</li>
                {/* <li>Device and app usage information</li> */}
                <li>Location information (with permission)</li>
              </ul>
            </section>

            {/* Location Data */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Location Data
              </h2>

              <p className="mt-2 text-base text-slate-700">
                GenieZap collects and uses location information to provide
                delivery and address-related services.
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>What we collect:</strong> Approximate location
                  (city/area) and precise GPS location when permission is
                  granted.
                </li>

                <li>
                  <strong>Why we collect it:</strong> To detect your delivery
                  address, determine service availability, show products
                  available in your area, calculate delivery charges, and
                  improve delivery accuracy.
                </li>

                <li>
                  <strong>How it is used:</strong> Location information is used
                  only for order fulfillment, delivery services, and app
                  functionality.
                </li>

                <li>
                  <strong>Advertising:</strong> Location information is not used
                  for advertising purposes.
                </li>

                <li>
                  <strong>Sharing:</strong> Location data may be shared with
                  delivery partners only to complete your order.
                </li>

                <li>
                  <strong>Sale of Data:</strong> We do not sell your location
                  data or personal information.
                </li>

                <li>
                  <strong>Control:</strong> You can deny or revoke location
                  permission at any time through your device settings.
                </li>
              </ul>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Permissions
              </h2>

              <p className="mt-2 text-base text-slate-700">
                GenieZap may request certain device permissions such as location
                access to provide core app functionality. Permissions can be
                granted, denied, or revoked at any time through your device
                settings.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                How We Use Information
              </h2>

              <p className="mt-2 text-base text-slate-700">
                We use collected information to:
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                <li>Process and manage orders</li>
                <li>Arrange and track deliveries</li>
                <li>Provide customer support</li>
                <li>Improve app performance and user experience</li>
                <li>Prevent fraud and misuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Payments */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Payments
              </h2>

              <p className="mt-2 text-base text-slate-700">
                Online payments are processed securely through Razorpay. Payment
                card details and payment credentials are processed by Razorpay
                according to their privacy and security policies. GenieZap does
                not store full card or banking information.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Data Sharing
              </h2>

              <p className="mt-2 text-base text-slate-700">
                We may share limited information with:
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                <li>Delivery partners to fulfill orders</li>
                <li>Payment service providers for payment processing</li>
                <li>Government authorities when required by law</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Data Retention
              </h2>

              <p className="mt-2 text-base text-slate-700">
                We retain personal information only for as long as necessary to
                provide our services, comply with legal obligations, resolve
                disputes, and enforce agreements.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Your Rights and Choices
              </h2>

              <p className="mt-2 text-base text-slate-700">
                You may:
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                <li>Update your account information</li>
                <li>Disable location permissions</li>
                <li>Request account deletion</li>
                <li>Request information about your stored data</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Security
              </h2>

              <p className="mt-2 text-base text-slate-700">
                We take reasonable technical and organizational measures to
                protect user information from unauthorized access, loss,
                misuse, or disclosure.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-2 text-base text-slate-700">
                If you have questions about this Privacy Policy or wish to
                request account deletion, contact us at:
              </p>

              <p className="mt-2">
                <a
                  href="mailto:support@geniezap.in"
                  className="text-emerald-700 hover:underline"
                >
                  support@geniezap.in
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
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