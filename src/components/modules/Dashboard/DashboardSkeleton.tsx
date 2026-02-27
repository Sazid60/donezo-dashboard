function SkeletonBlock({ className }: { className: string }) {
    return <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
}

export function DashboardSkeleton() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                        <div className="flex justify-end">
                            <SkeletonBlock className="h-9 w-9 rounded-full" />
                        </div>
                        <SkeletonBlock className="mt-4 h-4 w-24" />
                        <SkeletonBlock className="mt-3 h-10 w-20" />
                        <SkeletonBlock className="mt-3 h-3 w-32" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm md:col-span-2 lg:col-span-2">
                    <SkeletonBlock className="mb-6 h-5 w-40 sm:mb-8" />
                    <div className="flex h-28 items-end justify-between gap-2 px-1 sm:h-32 sm:gap-3 sm:px-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <SkeletonBlock key={i} className="h-full w-full max-w-12 rounded-full sm:max-w-15" />
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <SkeletonBlock className="mb-5 h-5 w-24" />
                    <SkeletonBlock className="mb-4 h-10 w-full" />
                    <SkeletonBlock className="mb-8 h-4 w-40" />
                    <SkeletonBlock className="h-10 w-full rounded-xl" />
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <SkeletonBlock className="h-5 w-20" />
                        <SkeletonBlock className="h-7 w-16 rounded-full" />
                    </div>
                    <div className="space-y-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <SkeletonBlock className="h-8 w-8 rounded-lg" />
                                <div className="w-full space-y-2">
                                    <SkeletonBlock className="h-4 w-36" />
                                    <SkeletonBlock className="h-3 w-28" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden gap-4 sm:gap-5 md:grid md:grid-cols-2 xl:hidden">
                <div className="h-full rounded-2xl bg-white p-5 shadow-sm md:col-span-2">
                    <SkeletonBlock className="mb-4 h-5 w-40" />
                    <div className="space-y-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <SkeletonBlock className="h-9 w-9 rounded-full" />
                                <div className="w-full space-y-2">
                                    <SkeletonBlock className="h-4 w-36" />
                                    <SkeletonBlock className="h-3 w-44" />
                                </div>
                                <SkeletonBlock className="h-6 w-20 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-full rounded-4xl bg-white p-6 shadow-sm">
                    <SkeletonBlock className="mb-4 h-5 w-36" />
                    <div className="flex flex-col items-center">
                        <SkeletonBlock className="h-28 w-40 rounded-full" />
                        <SkeletonBlock className="mt-6 h-4 w-44" />
                    </div>
                </div>
                <div className="h-full min-h-55 rounded-2xl bg-brand-800 p-5 shadow-sm sm:min-h-60">
                    <SkeletonBlock className="mb-4 h-5 w-28 bg-white/30" />
                    <SkeletonBlock className="mx-auto mb-8 h-10 w-40 bg-white/30" />
                    <div className="flex items-center justify-center gap-3">
                        <SkeletonBlock className="h-11 w-11 rounded-full bg-white/30" />
                        <SkeletonBlock className="h-11 w-11 rounded-full bg-white/30" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:hidden xl:grid xl:grid-cols-4">
                <div className="grid grid-cols-1 gap-4 sm:gap-5 xl:col-span-3 xl:grid-cols-2">
                    <div className="h-full rounded-2xl bg-white p-5 shadow-sm">
                        <SkeletonBlock className="mb-4 h-5 w-40" />
                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <SkeletonBlock className="h-9 w-9 rounded-full" />
                                    <div className="w-full space-y-2">
                                        <SkeletonBlock className="h-4 w-36" />
                                        <SkeletonBlock className="h-3 w-44" />
                                    </div>
                                    <SkeletonBlock className="h-6 w-20 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="h-full rounded-4xl bg-white p-6 shadow-sm">
                        <SkeletonBlock className="mb-4 h-5 w-36" />
                        <div className="flex flex-col items-center">
                            <SkeletonBlock className="h-28 w-40 rounded-full" />
                            <SkeletonBlock className="mt-6 h-4 w-44" />
                        </div>
                    </div>
                </div>
                <div className="h-full min-h-55 rounded-2xl bg-brand-800 p-5 shadow-sm sm:min-h-60">
                    <SkeletonBlock className="mb-4 h-5 w-28 bg-white/30" />
                    <SkeletonBlock className="mx-auto mb-8 h-10 w-40 bg-white/30" />
                    <div className="flex items-center justify-center gap-3">
                        <SkeletonBlock className="h-11 w-11 rounded-full bg-white/30" />
                        <SkeletonBlock className="h-11 w-11 rounded-full bg-white/30" />
                    </div>
                </div>
            </div>
        </>
    )
}
