import { ChannelType, PathType } from '@/shared/types/channel'
import { Metadata } from 'next'
import { returnTitle } from './utils/returnPageTitle'

type ChannelPageProps = {
  params: Record<string, [ChannelType, PathType]>
}

export async function generateMetadata({ params }: ChannelPageProps): Promise<Metadata> {
  const [channel, path] = params.channel
  const title = `TMDB ${returnTitle(path, channel)}`
  return {
    title,
    openGraph: {
      title,
      type: 'website',
      siteName: '',
      locale: 'ko_KR',
    },
  }
}

const ChannelPage = async ({ params }: ChannelPageProps) => {
  const [channel, path] = params.channel

  return (
    <section className="pt-8 pb-4">
      <h1 className="text-xl font-semibold">{returnTitle(path, channel)}</h1>
    </section>
  )
}

export default ChannelPage
