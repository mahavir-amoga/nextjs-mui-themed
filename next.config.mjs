/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@amoga-org/react-components"], // Ensures ESModules are transpiled
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Ensure React resolves to a single instance
      react: "react", // You don't need require.resolve here
    };
    return config;
  },
};

export default nextConfig;
