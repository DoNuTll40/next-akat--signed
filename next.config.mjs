/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    basePath: "/wellwishes",
    assetPrefix: "/wellwishes",
    images: {
        unoptimized: true,
        
    },
};

export default nextConfig;
