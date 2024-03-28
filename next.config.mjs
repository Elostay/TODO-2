// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     };
//     return config;
//   },
// };

// export default nextConfig;

// const nextConfig = {
//   // experimental: {
//   //   appDir: true,
//   //   serverComponentsExternalPackages: ["mongoose"],
//   // },
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },

//   // webpack(config) {
//   //   config.experiments = {
//   //     ...config.experiments,
//   //     topLevelAwait: true,
//   //   };
//   //   return config;
//   // },
// };

// export default nextConfig;
const nextConfig = {
  basePath: "",
  //   output: "export",
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 60, 64, 96],
  },
  jsc: {
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
};

export default nextConfig;
