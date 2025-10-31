import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
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

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom, responsive websites built with cutting-edge technology',
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: '🤖',
      title: 'AI Agents',
      description: 'Intelligent automation and AI-powered solutions',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence',
    },
    {
      icon: '💡',
      title: 'Tech Consulting',
      description: 'Expert guidance for your digital transformation',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-gradient opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-strong">
                SimShank Tech
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
            >
              Innovating the Future of Digital Intelligence
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-cyan-400 font-semibold rounded-lg border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-10 hidden lg:block"
          >
            <div className="w-20 h-20 border-2 border-cyan-500/30 rounded-lg rotate-45" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 right-10 hidden lg:block"
          >
            <div className="w-16 h-16 border-2 border-purple-500/30 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
              About SimShank Tech
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              SimShank Tech & Media is a next-generation technology startup providing complete
              digital solutions. We specialize in creating innovative web experiences, mobile
              applications, AI-powered agents, and strategic digital marketing campaigns. Our
              mission is to transform businesses through cutting-edge technology and intelligent
              automation.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              We combine creativity with technical excellence to deliver solutions that not only
              meet but exceed our clients' expectations. From startups to enterprises, we're
              here to revolutionize your digital presence.
            </p>
          </motion.div>

          {/* Innovation Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Innovation', 'Excellence', 'Technology', 'Growth'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 glass rounded-lg flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                  <span className="text-3xl">
                    {item === 'Innovation' && '💡'}
                    {item === 'Excellence' && '⭐'}
                    {item === 'Technology' && '🚀'}
                    {item === 'Growth' && '📈'}
                  </span>
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
              Our Services
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors glow-text">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-cyan-400 font-semibold rounded-lg border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Have a project in mind? Let's discuss how we can help bring your vision to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="home-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="home-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="home-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="home-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300 text-sm sm:text-base"
              >
                Send Message via WhatsApp
              </motion.button>
            </form>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Email</p>
                  <a
                    href="mailto:simshanktech@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm break-all"
                  >
                    simshanktech@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919057577434"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
                  >
                    +91 9057577434
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/918000398836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
                  >
                    +91 8000398836
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

