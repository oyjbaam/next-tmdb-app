import { CommonListResponseType } from './commonListType'
import { Dates, MovieListResultType } from './movieListType'
import { TvShowListResultType } from './tvListType'

export type MovieOrTVResponseType = CommonListResponseType<MovieListResultType | TvShowListResultType>

export type MovieResponseType = CommonListResponseType<MovieListResultType> & { dates: Dates }

export type TvShowResponse = CommonListResponseType<TvShowListResultType>
