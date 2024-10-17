import { cn } from '@/lib/utils'
import { FC } from 'react'

interface isRatingFirstProps {
    isRatingFirst?: boolean
}

const Review:FC<isRatingFirstProps> = ({isRatingFirst = false}) => {
  return (
    <div className="flex  gap-3">
    <div className={cn(isRatingFirst ? "text-left order2" : "text-right")}>
      <h5 className="text-green text-xl font-semibold">Excellent</h5>
      <p className="text-sm">876 reviews</p>
    </div>
    <div className="relative bg-green text-white text-xl font-medium py-1.5 px-4 rounded-md flex items-center justify-center">
      9.4
      <div className="absolute -bottom-[11px] left-0.5 w-0 h-0 border-l-[14px] border-l-transparent border-t-[18px] border-t-green rotate-[272deg]"></div>
    </div>
  </div>
  )
}

export default Review