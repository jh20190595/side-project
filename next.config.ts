import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['image.msscdn.net'], // ✅ 꼭 이 도메인을 허용
      },
};

export default nextConfig;
