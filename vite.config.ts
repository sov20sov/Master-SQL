import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  const isGithubPages = env.DEPLOY_TARGET === 'gh'

  return {
    plugins: [react()],
    base: isGithubPages ? '/Master-Sql/' : '/',
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  }
})
