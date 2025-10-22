import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Button from '../components/Button';
import { causes } from '../data/mockData';
import { formatCurrency, calculateProgress } from '../utils/helpers';
import { Heart, Users, Target, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Lives Impacted' },
    { icon: Heart, value: '50+', label: 'Active Projects' },
    { icon: Target, value: '$2M+', label: 'Funds Raised' },
    { icon: Award, value: '25+', label: 'Awards Won' },
  ];

  const featuredCauses = causes.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Making a Difference Together"
        subtitle="Welcome to TrustApp"
        description="We are a charitable trust dedicated to creating positive change in communities worldwide through education, healthcare, and sustainable development initiatives."
        primaryButtonText="Donate Now"
        primaryButtonHref="/donate"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about"
        backgroundImage="/api/placeholder/1920/1080"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we've made a significant difference in communities around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Causes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Causes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our current initiatives and see how you can make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCauses.map((cause, index) => (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <div className="relative">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cause.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {cause.status === 'active' ? 'Active' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {cause.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{calculateProgress(cause.currentAmount, cause.targetAmount).toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${calculateProgress(cause.currentAmount, cause.targetAmount)}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Raised</div>
                        <div className="font-semibold text-gray-900">
                          {formatCurrency(cause.currentAmount)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Goal</div>
                        <div className="font-semibold text-gray-900">
                          {formatCurrency(cause.targetAmount)}
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      href="/donate"
                      className="w-full"
                      size="sm"
                    >
                      Donate Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="/causes"
              variant="outline"
              size="lg"
            >
              View All Causes
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
