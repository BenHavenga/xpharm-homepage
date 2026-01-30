import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false, // Prevents automatic trailing slash redirects
  
  async redirects() {
    return [
      // Redirect www to non-www (handles both http and https)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.xpharm.ie',
          },
        ],
        destination: 'https://xpharm.ie/:path*',
        permanent: true, // 301 redirect
      },
      // Force HTTPS on non-www (if accessed via http)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'xpharm.ie',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://xpharm.ie/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
