import { ConfigProps } from './interface'

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  clientUrl: process.env.CLIENT_URL,
})
