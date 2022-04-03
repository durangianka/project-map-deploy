/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key: 'pk.eyJ1IjoiZ2lhbmNhcmxvLWR1cmFudCIsImEiOiJjbDFmN291cG4wMjBuM2ltbHB5OWkxOGVkIn0.2_bXBeuswhUSwXs4BKmEFQ',
    server: "localhost:3000"
  }
}

module.exports = nextConfig
