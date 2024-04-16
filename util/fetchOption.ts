const API_KEY = process.env.NEXT_PUBLIC_TMDB_API
export const BASE_URL = process.env.NEXT_PUBLIC_BASEURL
export type Method = 'get' | 'post' | 'delete' | 'put' | 'patch'

export const fetchOption = (method: Method) => {
  const options = {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return options
}
