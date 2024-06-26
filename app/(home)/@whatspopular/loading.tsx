import FlexBox from '@/components/ui/FlexBox'
import CardSkeleton from '@/components/common/CardSkeleton'

const loading = () => {
  return (
    <div role="status" className="animate-pulse mt-10">
      <div className="h-10 lg:w-[400px] w-full bg-slate-200 dark:bg-slate-700 rounded-md mb-4"></div>
      <FlexBox className="w-full overflow-hidden gap-4">
        {[...Array(5)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </FlexBox>
      <span role="status" className="sr-only">
        loading...
      </span>
    </div>
  )
}

export default loading
