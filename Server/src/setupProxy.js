import { createProxyMiddleware } from 'http-proxy-middleware'

export const app = () => {
  app.use(
    createProxyMiddleware('/endpoint', {
      target: 'url',
      changeOrigin: true,
    }),
  )
}
