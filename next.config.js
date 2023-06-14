/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'trading-strategy.ghost.io',
      'images.tokopedia.net',
      'image.tmdb.org',
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
