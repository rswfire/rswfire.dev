import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["dev.rswfire.local"],
    reactCompiler: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
