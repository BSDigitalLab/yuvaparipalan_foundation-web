import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// @ts-ignore
import { sendFormSubmissionEmails } from './server/emailHandler.js'

function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/send-email', async (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: any) => { body += chunk })
          req.on('end', async () => {
            try {
              const { formType, formData } = JSON.parse(body)
              console.log(`[SMTP EMAIL SERVICE] Dispatching ${formType} form submission emails...`)
              const result = await sendFormSubmissionEmails(formType, formData)
              console.log(`[SMTP EMAIL SERVICE] Result:`, result)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify({ success: true, message: 'Emails processed', result }))
            } catch (error: any) {
              console.error('[SMTP EMAIL SERVICE] Dispatch error:', error)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 500
              res.end(JSON.stringify({ success: false, error: error?.message || 'Server error' }))
            }
          })
        } else {
          res.statusCode = 405
          res.end('Method Not Allowed')
        }
      })
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
