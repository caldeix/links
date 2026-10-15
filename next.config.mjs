/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/links' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? basePath : '',
  env: {
    // Exposed to client components for manual basePath usage (e.g. Image src, fetch)
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images:     { unoptimized: true },
}

export default nextConfig
