import CardSkeleton from '@/app/components/common/cardSkeleton'
import Grid from '@/app/components/common/grid'

const loading = () => {
  return (
    <Grid>
      <CardSkeleton />
    </Grid>
  )
}

export default loading
