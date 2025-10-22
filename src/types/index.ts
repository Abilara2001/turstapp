export interface Member {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  targetAmount: number;
  currentAmount: number;
  category: 'education' | 'health' | 'environment' | 'poverty' | 'disaster-relief' | 'other';
  status: 'active' | 'completed' | 'paused';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  type: 'fundraiser' | 'volunteer' | 'awareness' | 'other';
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: 'events' | 'volunteers' | 'beneficiaries' | 'facilities';
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
  anonymous: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
