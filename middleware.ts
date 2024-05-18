import { NextRequest, NextResponse } from 'next/server'
const middleware = async (req: NextRequest) => {
  const nextUrlPath = req.nextUrl.pathname

  return NextResponse.next()
}

export default middleware
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
