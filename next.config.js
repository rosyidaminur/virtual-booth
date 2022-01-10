module.exports = {
  reactStrictMode: true,
  basePath: '/'+process.env.BASE_PATH,
  assetPrefix: '/'+process.env.BASE_PATH+'/',
  publicRuntimeConfig: {
    base: '/'+process.env.BASE_PATH+'/',
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
}
