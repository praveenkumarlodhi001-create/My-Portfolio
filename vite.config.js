import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Dev/preview only: serve /api/resume locally so the passcode gate works with `npm run dev`.
// On Vercel the real function in /api is used.
const localResumeApi = () => {
  const mount = (server) => {
    server.middlewares.use('/api/resume', async (req, res) => {
      const { default: handler } = await import('./api/resume.js')
      return handler(req, res)
    })
  }
  return { name: 'local-resume-api', configureServer: mount, configurePreviewServer: mount }
}

export default defineConfig({
  plugins: [react(), localResumeApi()],
})
