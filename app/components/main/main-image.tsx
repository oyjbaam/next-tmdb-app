import { BackDropImage } from '@/app/types/backDrop'
import Image from 'next/image'
import { fetcher } from '@/app/util/fetcher'

const MainImage = async () => {
  const backDrop: BackDropImage = await fetcher(
    'get',
    'https://api.themoviedb.org/3/discover/movie?with_network=123&language=en-US'
  )
  const imgUrl = `https://image.tmdb.org/t/p/w780${backDrop.results[0].backdrop_path}`

  return (
    <div className="relative rounded-xl w-full h-80 overflow-hidden">
      <div className="absolute w-full h-full z-10 flex flex-col justify-center px-10 text-white">
        <h2 className="text-4xl font-extrabold">Welcome. TMDB DB</h2>
        <h3 className="text-2xl font-extrabold">Millions of Movies, Tv Shows and People to discover.</h3>
      </div>
      <div className="absolute w-full h-full filter bg-indigo-800">
        <Image src={imgUrl} alt="main page image" fill className="object-cover opacity-40 saturate-50" />
      </div>
    </div>
  )
}

export default MainImage
