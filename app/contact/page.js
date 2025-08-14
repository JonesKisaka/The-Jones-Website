'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <p>Get in touch with me for collaborations, opportunities, or just to say hello!</p>
      
      <div className="mt-8">
        <div className="mb-8">
          <h2>Let's Connect</h2>
          <p>
            I'm always interested in hearing about new opportunities, interesting projects, 
            or just connecting with fellow developers and engineers. Feel free to reach out!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me more about your project or inquiry..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-600 font-medium">
              Sorry, there was an error sending your message. Please try again.
            </p>
          )}
        </form>

        <div className="mt-8 text-center">
          <h3>Other Ways to Reach Me</h3>
          <p>Email: kisakathejones@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/joneskisaka</p>
          <p>GitHub: github.com/joneskisaka</p>
        </div>
      </div>
    </div>
  )
} 