const API_KEY = process.env.NEXT_PUBLIC_TMDB_API
type Method = 'get' | 'post' | 'delete' | 'put' | 'patch'

const fetchOption = (method: Method) => {
  const options = {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return options
}

export const fetcher = async (method: Method, url: string) => {
  const res = await fetch(url, fetchOption(method))
  return res.json()
}
