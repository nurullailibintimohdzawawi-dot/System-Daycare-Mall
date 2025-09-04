import { useState } from 'react'

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message! We will get back to you soon.')
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>📧 info@yourbrand.com</p>
            <p>📞 (555) 123-4567</p>
            <p>📍 123 Business Street, City, State 12345</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              placeholder="Your Name" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
              placeholder="Your Email" 
              required 
            />
            <textarea 
              name="message"
              value={contactForm.message}
              onChange={handleInputChange}
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact