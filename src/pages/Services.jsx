import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description:
        'We build stunning, high-performance websites that captivate your audience and drive results. From responsive designs to complex web applications, we use the latest technologies to create digital experiences that stand out.',
      features: [
        'Responsive Design',
        'Custom Web Applications',
        'E-commerce Solutions',
        'Performance Optimization',
      ],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: '📈',
      title: 'Influencer Marketing',
      description:
        'Grow your online presence with data-driven digital marketing strategies. From SEO to social media management, we help you reach your target audience and achieve your business goals.',
      features: [
        'Influencer Marketing/ Social Media Marketing',
        'PPC Advertising',
        'Analytics & Reporting',
        'SEO & Content Strategy',
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description:
        'Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions, ensuring seamless user experiences across all devices.',
      features: [
        'Native iOS & Android',
        'Cross-Platform Apps',
        'UI/UX Design',
        'App Store Optimization',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: '🤖',
      title: 'AI Agent Integration',
      description:
        'Leverage the power of artificial intelligence with our custom AI agent solutions. Automate workflows, enhance customer interactions, and unlock new possibilities with intelligent automation.',
      features: [
        'Custom AI Agents',
        'Workflow Automation',
        'Chatbots & Virtual Assistants',
        'Machine Learning Solutions',
      ],
      gradient: 'from-pink-500 to-red-600',
    },
    {
      icon: '💡',
      title: 'Tech Consulting',
      description:
        'Get expert guidance for your digital transformation journey. We help you make informed technology decisions, optimize your tech stack, and align your digital strategy with your business objectives.',
      features: [
        'Technology Strategy',
        'System Architecture',
        'Digital Transformation',
        'Technical Audits',
      ],
      gradient: 'from-cyan-500 to-purple-600',
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
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions to transform your business and drive innovation
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden relative group"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl sm:text-5xl shadow-lg shadow-cyan-500/30`}
                      >
                        {service.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow mt-4 md:mt-0">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors glow-text">
                        {service.title}
                      </h2>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            <span className="text-gray-400 text-sm sm:text-base">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mt-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 sm:p-10 md:p-12 text-center border border-cyan-500/30"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent glow-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

