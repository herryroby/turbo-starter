/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config) => {
    // Ignore the critical dependency warning for @supabase/realtime-js
    config.ignoreWarnings = [
      { module: /@supabase\/realtime-js/ },
      // You can add more modules to ignore here if needed
    ];
    return config;
  },
};

export default nextConfig;
