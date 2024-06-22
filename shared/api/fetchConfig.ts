const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASEURL
const API_KEY = process.env.TMDB_API_KEY

const createOptions = (): RequestInit => {
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${API_KEY}`,
  }

  return { headers }
}

export const requestFetch = async <T>(endPoint: string, config: RequestInit = {}): Promise<T> => {
  const options = createOptions()
  const url = BASE_URL + endPoint
  const fetchURL = new URL(url)

  if (!fetchURL.pathname.endsWith('/images') && !fetchURL.pathname.includes('person')) {
    fetchURL.searchParams.set('language', 'ko-kr')
  }

  const urlString = fetchURL.toString()

  try {
    const res = await fetch(urlString, {
      ...config,
      headers: {
        ...options.headers,
        ...config.headers,
      },
    })

    if (res.ok) {
      const textResponse = await res.text()
      if (!textResponse) {
        return {} as T
      }
      const jsonResponse = JSON.parse(textResponse)
      return jsonResponse as T
    }

    let errorMessage = 'Something went wrong'
    try {
      const errorData = await res.json()
      errorMessage = errorData.message || errorMessage
      console.error('Error response JSON:', errorData)
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError)
    }

    throw new Error(errorMessage)
  } catch (networkError) {
    console.error('Network or fetch error:', networkError)
    throw new Error(getErrorMessage(networkError))
  }
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message)
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unknown error occurred'
}
