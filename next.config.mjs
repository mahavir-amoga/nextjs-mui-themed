/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.extensions.push('.jsx'); // Ensure .jsx files are resolved
      return config;
    }
  };
  
  export default nextConfig;
  