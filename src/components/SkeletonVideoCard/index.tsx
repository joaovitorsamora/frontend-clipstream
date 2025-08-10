import { Skeleton } from '../../ui/Skeleton'

export const SkeletonVideoCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-8 2xl:grid-rows-2 max-w-[1600px] mx-auto min-h-screen">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col min-w-full mt-4 gap-4">
          <div className="flex flex-col items-center justify-center pt-8">
            <Skeleton className="w-full 2xl:w-2/3 h-40 bg-neutral-700 rounded" />
            <Skeleton className="w-3/4 2xl:w-2/4 h-4 bg-neutral-600 rounded mt-[0.9rem]" />
          </div>
        </div>
      ))}
    </div>
  )
}
