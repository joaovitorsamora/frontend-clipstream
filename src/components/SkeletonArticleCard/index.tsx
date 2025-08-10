'use client'

import { Skeleton } from '../../ui/Skeleton'
import { useCheckScreen } from '../../hooks/useCheckScreen'
export const SkeletonArticleCard = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useCheckScreen()

  return (
    <div className="w-full bg-black rounded-t-[10px]">
      <div className="max-w-[1920px] mx-auto p-[4%] bg-black overflow-x-none">
        <div className="flex gap-4 w-full">
          {(isSmallScreen ? [1] : isMediumScreen ? [1, 2] : isLargeScreen ? [1, 2, 3, 4] : [1, 2, 3]).map((_, i) => (
            <Skeleton key={i} className="h-[394px] w-full rounded-xl bg-neutral-700" />
          ))}
        </div>
      </div>
    </div>
  )
}
