import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { sendFormSubmissionEmails } from './server/emailHandler.ts'

function emailApiPlugin() {
  const handler = async (req: any, res: any, next: any) => {
    const url = req.originalUrl || req.url || ''
    if (url.startsWith('/api/send-email')) {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

      if (req.method === 'OPTIONS') {
        res.statusCode = 200
        res.end()
        return
      }

      if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk: any) => { body += chunk })
        req.on('end', async () => {
          try {
            const { formType, formData } = JSON.parse(body)
            console.log(`[SMTP EMAIL SERVICE] Processing ${formType} form submission emails...`)
            const result = await sendFormSubmissionEmails(formType, formData)
            console.log(`[SMTP EMAIL SERVICE] Result:`, result)
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200
            res.end(JSON.stringify({ success: true, message: 'Emails processed successfully', result }))
          } catch (error: any) {
            console.error('[SMTP EMAIL SERVICE] Dispatch error:', error)
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 500
            res.end(JSON.stringify({ success: false, error: error?.message || 'Server error' }))
          }
        })
        return
      }

      res.statusCode = 405
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }))
      return
    }
    next()
  }

  return {
    name: 'email-api-plugin',
    configureServer(server: any) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server: any) {
      server.middlewares.use(handler)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), emailApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
