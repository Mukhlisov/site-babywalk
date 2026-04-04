import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack:{
        resolveAlias: {
            canvas: "./empty-module.ts"
        }
    },
    allowedDevOrigins: ['192.168.1.191'],
};

export default nextConfig;
