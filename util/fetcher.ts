const API_KEY = process.env.NEXT_PUBLIC_TMDB_API
export const BASE_URL = process.env.NEXT_PUBLIC_BASEURL
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

/**
 *
 * @param url path
 * @param method 'get' | 'post' | 'delete' | 'put' | 'patch'
 * @returns res.json()
 */
export const fetcher = async (url: string, method: Method) => {
  const res = await fetch(`${BASE_URL}${url}`, fetchOption(method))
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something wrong Error..')
  }
}
