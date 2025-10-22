import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { causes } from '../data/mockData';
import { formatCurrency, calculateProgress } from '../utils/helpers';
import { Filter, Search, Heart, Users, Target, Award } from 'lucide-react';

const CausesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Causes' },
    { value: 'education', label: 'Education' },
    { value: 'health', label: 'Healthcare' },
    { value: 'environment', label: 'Environment' },
    { value: 'poverty', label: 'Poverty Relief' },
    { value: 'disaster-relief', label: 'Disaster Relief' },
  ];

  const filteredCauses = causes.filter(cause => {
    const matchesCategory = selectedCategory === 'all' || cause.category === selectedCategory;
    const matchesSearch = cause.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cause.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: Heart, value: '6', label: 'Active Causes' },
    { icon: Target, value: '$535K', label: 'Total Goal' },
    { icon: Users, value: '$400K', label: 'Raised So Far' },
    { icon: Award, value: '75%', label: 'Average Progress' },
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
              Our Causes
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the initiatives we're working on and see how you can make a difference 
              in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search causes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCauses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No causes found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCauses.map((cause, index) => (
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
                            : cause.status === 'completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {cause.status === 'active' ? 'Active' : 
                           cause.status === 'completed' ? 'Completed' : 'Paused'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800 capitalize">
                          {cause.category.replace('-', ' ')}
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
                        disabled={cause.status !== 'active'}
                      >
                        {cause.status === 'active' ? 'Donate Now' : 
                         cause.status === 'completed' ? 'Completed' : 'Paused'}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, can help us reach our goals and create lasting change.
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
                Start Fundraising
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CausesPage;
