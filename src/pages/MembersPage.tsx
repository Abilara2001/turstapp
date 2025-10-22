import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { members } from '../data/mockData';
import { Search, Mail, Linkedin, Users, Award, Heart } from 'lucide-react';

const MembersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const roles = [
    { value: 'all', label: 'All Members' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'director', label: 'Directors' },
    { value: 'coordinator', label: 'Coordinators' },
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || 
                       (selectedRole === 'leadership' && member.designation.toLowerCase().includes('chair')) ||
                       (selectedRole === 'director' && member.designation.toLowerCase().includes('director')) ||
                       (selectedRole === 'coordinator' && member.designation.toLowerCase().includes('coordinator'));
    
    return matchesSearch && matchesRole;
  });

  const stats = [
    { icon: Users, value: '6', label: 'Team Members' },
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Heart, value: '15', label: 'Countries Served' },
    { icon: Users, value: '500+', label: 'Volunteers Led' },
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
              Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who lead our mission and drive our impact. 
              Our team brings together diverse expertise and shared passion for creating positive change.
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

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRole === role.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No team members found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <div className="p-6">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {member.designation.split(' ')[0]}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-4">
                        {member.designation}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      <div className="flex justify-center space-x-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="w-5 h-5 text-gray-600" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5 text-gray-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference. 
              Explore opportunities to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
              >
                View Open Positions
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="outline"
              >
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
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
              Whether you want to donate, volunteer, or partner with us, there are many ways to get involved.
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
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
