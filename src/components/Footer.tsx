import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Mission & Vision', href: '/about' },
      { label: 'Our Team', href: '/members' },
      { label: 'Annual Reports', href: '/about' },
    ],
    causes: [
      { label: 'Education', href: '/causes' },
      { label: 'Healthcare', href: '/causes' },
      { label: 'Environment', href: '/causes' },
      { label: 'Disaster Relief', href: '/causes' },
    ],
    getInvolved: [
      { label: 'Volunteer', href: '/contact' },
      { label: 'Donate', href: '/donate' },
      { label: 'Fundraise', href: '/contact' },
      { label: 'Partnership', href: '/contact' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Service', href: '/contact' },
    ],
  };

  const socialLinks = [
    { platform: 'Facebook', url: '#', icon: Facebook },
    { platform: 'Twitter', url: '#', icon: Twitter },
    { platform: 'Instagram', url: '#', icon: Instagram },
    { platform: 'LinkedIn', url: '#', icon: Linkedin },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">TrustApp</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  We are dedicated to creating positive change in communities worldwide through 
                  education, healthcare, and sustainable development initiatives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5" />
                    <span>info@trustapp.org</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>123 Charity Street, Hope City, HC 12345</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* About Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  {footerLinks.about.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Causes Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Our Causes</h3>
                <ul className="space-y-2">
                  {footerLinks.causes.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Get Involved Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
                <ul className="space-y-2">
                  {footerLinks.getInvolved.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} TrustApp. All rights reserved. | Privacy Policy | Terms of Service
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
