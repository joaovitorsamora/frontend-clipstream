'use client'

import { Skeleton } from '../../ui/Skeleton'
import { useCheckScreen } from '../../hooks/useCheckScreen'
export const SkeletonArticleCard = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useCheckScreen()

  return (
    <section className="w-full">
      <div className="w-screen -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)] bg-black py-8">
        <div className="max-w-[1920px] mx-auto px-[4%]">
          <div className="flex gap-4 w-full">
            {(isSmallScreen ? [1] : isMediumScreen ? [1, 2] : isLargeScreen ? [1, 2, 3, 4] : [1, 2, 3]).map((_, i) => (
              <Skeleton key={i} className="h-[394px] w-full rounded-xl bg-neutral-700" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
