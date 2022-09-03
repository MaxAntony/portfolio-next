const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  i18n: { locales: ['es'], defaultLocale: 'es' }
}

module.exports = withPWA(nextConfig)
