import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { ContactFormData } from '../types';
import { validateEmail } from '../utils/helpers';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const initialFormData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validateForm = (data: ContactFormData) => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const form = useForm(initialFormData, validateForm);

  const handleSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Contact form submitted:', data);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await form.submit(handleSubmit);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@trustapp.org', 'support@trustapp.org'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Charity Street', 'Hope City, HC 12345'],
      description: 'Come visit our office and meet our team'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      description: 'We\'re here to help during these hours'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions, want to volunteer, 
              or are interested in partnering with us, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <div className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-3">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>

                  {form.isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => form.reset()}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={form.data.name}
                            onChange={(e) => form.setValue('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                          {form.errors.name && (
                            <p className="mt-1 text-sm text-red-600">{form.errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={form.data.email}
                            onChange={(e) => form.setValue('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Enter your email"
                          />
                          {form.errors.email && (
                            <p className="mt-1 text-sm text-red-600">{form.errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          value={form.data.subject}
                          onChange={(e) => form.setValue('subject', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What's this about?"
                        />
                        {form.errors.subject && (
                          <p className="mt-1 text-sm text-red-600">{form.errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          value={form.data.message}
                          onChange={(e) => form.setValue('message', e.target.value)}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tell us how we can help you"
                        />
                        {form.errors.message && (
                          <p className="mt-1 text-sm text-red-600">{form.errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        loading={form.isSubmitting}
                      >
                        {form.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Charity Street, Hope City</p>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        How can I volunteer?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contact us through the form or email us directly. We'll get back to you with available opportunities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Are donations tax-deductible?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yes, all donations to TrustApp are tax-deductible. You'll receive a receipt for your records.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        How can I partner with you?
                      </h4>
                      <p className="text-sm text-gray-600">
                        We welcome partnerships! Please reach out to discuss collaboration opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of people who are already making a positive impact in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/donate"
                size="lg"
                className="bg-white text-primary-600 hover:bg-white/90"
              >
                Donate Now
              </Button>
              <Button
                href="/causes"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Our Causes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
