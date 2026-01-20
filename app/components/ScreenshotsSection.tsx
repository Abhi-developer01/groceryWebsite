export default function ScreenshotsSection() {
  const screenshots = [
    "/images/13.png",   // replace with your screenshot
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
  ];

  return (
    <section
      id="screenshots"
      className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            App screenshots
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real app UI preview from GenieZap.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <img
                src={src}
                alt={`App screenshot ${index + 1}`}
                className="h-84 w-full "
              />

              <div className="px-3 py-2 text-center text-xs text-slate-600">
                Screenshot {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
