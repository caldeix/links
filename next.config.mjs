/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/links' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? basePath : '',
  env: {
    // Exposed to client components for manual basePath usage (e.g. Image src)
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint:     { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images:     { unoptimized: true },
}

export default nextConfig
