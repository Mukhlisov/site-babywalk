import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    turbopack:{
        resolveAlias: {
            canvas: "./empty-module.ts"
        }
    },
    allowedDevOrigins: ['192.168.1.191', '192.168.1.210'],
};

export default nextConfig;
