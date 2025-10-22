import { Member, Cause, Event, GalleryItem } from '../types';

export const members: Member[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    designation: 'Founder & Chairperson',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Sarah Johnson has dedicated over 20 years to humanitarian work and social causes. She founded the trust with a vision to create lasting positive change in communities worldwide.',
    email: 'sarah.johnson@trust.org',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    id: '2',
    name: 'Michael Chen',
    designation: 'Vice Chairperson',
    image: '/api/placeholder/300/300',
    bio: 'Michael brings extensive experience in international development and has led numerous successful projects across Asia and Africa.',
    email: 'michael.chen@trust.org',
    linkedin: 'https://linkedin.com/in/michaelchen'
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    designation: 'Medical Director',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Priya Sharma is a renowned pediatrician who has been instrumental in our healthcare initiatives, providing medical care to underserved communities.',
    email: 'priya.sharma@trust.org'
  },
  {
    id: '4',
    name: 'James Wilson',
    designation: 'Education Coordinator',
    image: '/api/placeholder/300/300',
    bio: 'James has been working in education for 15 years and leads our educational programs, ensuring quality learning opportunities for children.',
    email: 'james.wilson@trust.org'
  },
  {
    id: '5',
    name: 'Maria Rodriguez',
    designation: 'Volunteer Coordinator',
    image: '/api/placeholder/300/300',
    bio: 'Maria manages our volunteer network and community outreach programs, building strong relationships with local communities.',
    email: 'maria.rodriguez@trust.org'
  },
  {
    id: '6',
    name: 'David Kim',
    designation: 'Finance Director',
    image: '/api/placeholder/300/300',
    bio: 'David ensures transparent financial management and accountability, overseeing all financial operations and reporting.',
    email: 'david.kim@trust.org'
  }
];

export const causes: Cause[] = [
  {
    id: '1',
    title: 'Education for All',
    description: 'Providing quality education and learning materials to children in underserved communities. We believe every child deserves access to education regardless of their circumstances.',
    image: '/api/placeholder/400/300',
    targetAmount: 50000,
    currentAmount: 32500,
    category: 'education',
    status: 'active'
  },
  {
    id: '2',
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems and wells in rural areas where access to clean water is limited. This initiative has already helped over 10,000 families.',
    image: '/api/placeholder/400/300',
    targetAmount: 75000,
    currentAmount: 45000,
    category: 'environment',
    status: 'active'
  },
  {
    id: '3',
    title: 'Healthcare Access',
    description: 'Providing free medical camps, essential medicines, and healthcare services to communities without access to proper medical facilities.',
    image: '/api/placeholder/400/300',
    targetAmount: 100000,
    currentAmount: 78000,
    category: 'health',
    status: 'active'
  },
  {
    id: '4',
    title: 'Disaster Relief Fund',
    description: 'Emergency response and relief efforts for communities affected by natural disasters, providing immediate aid and long-term recovery support.',
    image: '/api/placeholder/400/300',
    targetAmount: 200000,
    currentAmount: 150000,
    category: 'disaster-relief',
    status: 'active'
  },
  {
    id: '5',
    title: 'Women Empowerment',
    description: 'Supporting women through skill development programs, micro-financing, and entrepreneurship training to create sustainable livelihoods.',
    image: '/api/placeholder/400/300',
    targetAmount: 60000,
    currentAmount: 60000,
    category: 'poverty',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Environmental Conservation',
    description: 'Tree planting initiatives, waste management programs, and environmental awareness campaigns to protect our planet for future generations.',
    image: '/api/placeholder/400/300',
    targetAmount: 40000,
    currentAmount: 25000,
    category: 'environment',
    status: 'active'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Charity Gala',
    description: 'Join us for our biggest fundraising event of the year. An evening of inspiration, entertainment, and giving back to the community.',
    image: '/api/placeholder/500/300',
    date: '2024-03-15',
    location: 'Grand Convention Center, New York',
    type: 'fundraiser'
  },
  {
    id: '2',
    title: 'Community Health Camp',
    description: 'Free medical check-ups, vaccinations, and health awareness sessions for the local community. All are welcome!',
    image: '/api/placeholder/500/300',
    date: '2024-02-28',
    location: 'Community Center, Downtown',
    type: 'volunteer'
  },
  {
    id: '3',
    title: 'Education Fair',
    description: 'Showcasing our educational programs and providing information about scholarships and learning opportunities for students.',
    image: '/api/placeholder/500/300',
    date: '2024-04-10',
    location: 'City Library, Main Branch',
    type: 'awareness'
  },
  {
    id: '4',
    title: 'Environmental Cleanup Drive',
    description: 'Community cleanup initiative to make our city cleaner and greener. Volunteers needed for beach and park cleanup.',
    image: '/api/placeholder/500/300',
    date: '2024-03-22',
    location: 'Central Park & Beach Area',
    type: 'volunteer'
  },
  {
    id: '5',
    title: 'Youth Leadership Workshop',
    description: 'Empowering young leaders through skill development, leadership training, and community service opportunities.',
    image: '/api/placeholder/500/300',
    date: '2024-05-05',
    location: 'Youth Center, University District',
    type: 'other'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'School Inauguration Ceremony',
    image: '/api/placeholder/400/300',
    description: 'Celebrating the opening of our new school in rural area, providing education to 200+ children.',
    category: 'facilities',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Volunteers at Work',
    image: '/api/placeholder/400/300',
    description: 'Our dedicated volunteers distributing food and supplies during the recent flood relief efforts.',
    category: 'volunteers',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Happy Children',
    image: '/api/placeholder/400/300',
    description: 'Children receiving new books and school supplies at our education distribution program.',
    category: 'beneficiaries',
    date: '2024-01-08'
  },
  {
    id: '4',
    title: 'Medical Camp Success',
    image: '/api/placeholder/400/300',
    description: 'Over 500 people received free medical check-ups at our recent health camp in the community.',
    category: 'events',
    date: '2024-01-05'
  },
  {
    id: '5',
    title: 'Water Well Installation',
    image: '/api/placeholder/400/300',
    description: 'Installing a new water well in a remote village, bringing clean water to 150 families.',
    category: 'facilities',
    date: '2024-01-03'
  },
  {
    id: '6',
    title: 'Community Meeting',
    image: '/api/placeholder/400/300',
    description: 'Engaging with community leaders to understand their needs and plan future initiatives.',
    category: 'events',
    date: '2023-12-28'
  },
  {
    id: '7',
    title: 'Women\'s Skill Training',
    image: '/api/placeholder/400/300',
    description: 'Women learning new skills at our empowerment workshop, creating opportunities for economic independence.',
    category: 'beneficiaries',
    date: '2023-12-25'
  },
  {
    id: '8',
    title: 'Tree Planting Drive',
    image: '/api/placeholder/400/300',
    description: 'Community members planting trees as part of our environmental conservation initiative.',
    category: 'events',
    date: '2023-12-20'
  }
];
