import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { DonationFormData } from '../types';
import { validateEmail, validatePhone } from '../utils/helpers';
import { Heart, CreditCard, Shield, CheckCircle } from 'lucide-react';

const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const initialFormData: DonationFormData = {
    amount: 0,
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false,
  };

  const validateForm = (data: DonationFormData) => {
    const errors: Partial<Record<keyof DonationFormData, string>> = {};

    if (data.amount <= 0) {
      errors.amount = 'Please select an amount';
    }

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    return errors;
  };

  const form = useForm(initialFormData, validateForm);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    form.setValue('amount', amount);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value) || 0;
    setSelectedAmount(amount);
    form.setValue('amount', amount);
  };

  const handleSubmit = async (data: DonationFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Donation submitted:', data);
    setIsSuccess(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await form.submit(handleSubmit);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-4"
        >
          <Card className="text-center">
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Your Donation!
              </h2>
              <p className="text-gray-600 mb-6">
                Your generous contribution will help us make a real difference in the lives of those we serve.
              </p>
              <div className="space-y-3">
                <Button
                  href="/causes"
                  className="w-full"
                >
                  View Our Causes
                </Button>
                <Button
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                    setSelectedAmount(0);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Make Another Donation
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make a Difference
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your donation helps us create lasting positive change in communities worldwide. 
              Every contribution, no matter the size, makes a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Donation Details
                  </h2>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-3 rounded-lg border-2 font-medium transition-colors ${
                              selectedAmount === amount
                                ? 'border-primary-600 bg-primary-50 text-primary-700'
                                : 'border-gray-300 hover:border-primary-300'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          placeholder="Custom amount"
                          value={selectedAmount || ''}
                          onChange={handleCustomAmount}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      {form.errors.amount && (
                        <p className="mt-1 text-sm text-red-600">{form.errors.amount}</p>
                      )}
                    </div>

                    {/* Personal Information */}
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.data.phone}
                        onChange={(e) => form.setValue('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                      {form.errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{form.errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        value={form.data.message}
                        onChange={(e) => form.setValue('message', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Add a personal message with your donation"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={form.data.anonymous}
                        onChange={(e) => form.setValue('anonymous', e.target.checked)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      loading={form.isSubmitting}
                    >
                      {form.isSubmitting ? 'Processing...' : 'Donate Now'}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Donate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Why Donate?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Direct impact on communities in need</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Transparent financial reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Tax-deductible donations</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Secure Donation
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CreditCard className="w-5 h-5 text-green-600" />
                    <span>SSL encrypted payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mt-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Your information is safe and secure</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about donating? We're here to help.
                  </p>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
