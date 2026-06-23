// Simple Express API server for contact form
// Run alongside Vite: node server.js
// Install: npm install express resend cors dotenv

import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body
    if (!data.name || !data.email || !data.phone || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const firmEmailContent = `New Consultation Request\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n${data.city ? `City: ${data.city}` : ''}\n${data.practiceArea ? `Practice Area: ${data.practiceArea}` : ''}\n\nMessage:\n${data.message}`

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Apex Legal Partners vipintyagiandcompany@gmail.com>',
        to: data.officeEmail || 'vipintyagiandcompany@gmail.com',
        replyTo: data.email,
        subject: `New Consultation Request - ${data.name}`,
        text: firmEmailContent,
      })
      await resend.emails.send({
        from: 'Apex Legal Partners <noreply@apexlegal.in>',
        to: data.email,
        subject: 'Thank you for contacting Apex Legal Partners',
        text: `Dear ${data.name},\n\nThank you for contacting us. We will get back to you within 24 hours.\n\nBest regards,\nApex Legal Partners`,
      })
    } else {
      console.log('Form submission (Resend not configured):', data)
    }

    res.json({ success: true, message: 'Consultation request submitted successfully' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to process request' })
  }
})

app.listen(3001, () => console.log('API server running on http://localhost:3001'))
