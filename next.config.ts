import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server binds 0.0.0.0, so a browser on 127.0.0.1 is treated as
  // cross-origin and its HMR socket is rejected. Hydration waits on that
  // socket, which left the menu and the contact form inert.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
