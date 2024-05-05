const API_KEY = process.env.TMDB_API

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
