/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options:{
    remarkPlugins:[
      require.resolve('./mdx-image-plugin'),
    ],
  },
});


const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"], // for mdx

  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/sangeeth-Chejerla/Blogposts/master/Images/**",
      },

      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withMDX(nextConfig);



