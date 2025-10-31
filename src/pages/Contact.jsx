import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/918000398836?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'simshanktech@gmail.com',
      link: 'mailto:simshanktech@gmail.com',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 9057577434',
      link: 'tel:+919057577434',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+91 8000398836',
      link: 'https://wa.me/918000398836',
      color: 'from-green-500 to-emerald-600',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-gradient opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              Get In Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </motion.p>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-6 sm:p-8 border border-gray-700"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Send Message via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
                  Reach out to us through any of these channels. We're always ready to discuss
                  your next project and explore how we can help you achieve your goals.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.title}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 glass rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="glass rounded-2xl p-6 sm:p-8 border border-gray-700"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white glow-text">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1 glow-text">✓</span>
                    <span>Fast response time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1 glow-text">✓</span>
                    <span>Customized solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1 glow-text">✓</span>
                    <span>Cutting-edge technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1 glow-text">✓</span>
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

