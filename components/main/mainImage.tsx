import Image from 'next/image'
import { getRandomNumber } from '@/shared/util/getRandomNumber'
import { getMainBannerImg } from '@/shared/api/tmdbAPI'
const MainImage = async () => {
  const backDrop = await getMainBannerImg()
  const randomNum = getRandomNumber(0, backDrop.results.length - 1)
  const imgUrl = `https://image.tmdb.org/t/p/w780${backDrop.results[randomNum].backdrop_path}`

  return (
    <div className="relative rounded-xl w-full h-80 overflow-hidden">
      <div className="absolute w-full h-full z-10 flex flex-col justify-center px-10 text-white">
        <h2 className="text-5xl font-extrabold">Test deploy</h2>
        <h3 className="text-2xl font-extrabold">Millions of Movies, Tv Shows and People to discover.</h3>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <Image
          src={imgUrl}
          alt="main page image"
          fill
          className="object-cover object-top opacity-40 saturate-50"
          priority
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}

export default MainImage
