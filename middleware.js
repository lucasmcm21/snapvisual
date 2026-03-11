import { NextResponse } from 'next/server'

export function middleware(req) {
    const url = req.nextUrl

    if (url.pathname.startsWith('/admin')) {
        const basicAuth = req.headers.get('authorization')

        if (basicAuth) {
            const authValue = basicAuth.split(' ')[1]
            const decodedStr = atob(authValue)
            // Normal Basic Auth format is "username:password"
            const parts = decodedStr.split(':')
            const pwd = parts[1]

            if (pwd === process.env.ADMIN_PASSWORD) {
                return NextResponse.next()
            }
        }

        return new NextResponse('Auth required', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Snap Visual Admin"'
            }
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*']
}
