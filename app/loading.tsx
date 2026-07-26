export default function Loading() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between py-12 lg:py-24 min-h-screen gap-0 lg:gap-8">
        <div className="w-full lg:w-[46%] flex flex-col gap-6 mb-14 lg:mb-0">
          <div className="h-10 w-40 rounded-lg bg-slate-800 animate-pulse" />
          <div className="h-6 w-56 rounded-lg bg-slate-800 animate-pulse" />
          <div className="flex flex-col gap-2">
            <div className="h-3 w-full rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-11/12 rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-4/5 rounded bg-slate-800 animate-pulse" />
          </div>
          <div className="hidden lg:flex flex-col gap-4 mt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 w-24 rounded bg-slate-800 animate-pulse" />
            ))}
          </div>
          <div className="flex flex-row gap-5 mt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-6 w-6 rounded-full bg-slate-800 animate-pulse" />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <div className="h-3 w-16 rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-full rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-5/6 rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-3/4 rounded bg-slate-800 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col gap-3"
              >
                <div className="h-3 w-20 rounded bg-slate-700 animate-pulse" />
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-4 w-16 rounded bg-slate-700 animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="p-4 rounded-xl flex flex-col gap-3">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-32 rounded bg-slate-800 animate-pulse" />
                    <div className="h-3 w-24 rounded bg-slate-800 animate-pulse" />
                  </div>
                  <div className="h-6 w-28 rounded-full bg-slate-800 animate-pulse" />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="h-3 w-full rounded bg-slate-800 animate-pulse" />
                  <div className="h-3 w-11/12 rounded bg-slate-800 animate-pulse" />
                  <div className="h-3 w-4/5 rounded bg-slate-800 animate-pulse" />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="h-5 w-14 rounded-full bg-slate-800 animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}