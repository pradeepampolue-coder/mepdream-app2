
import React from 'react';
import { Service, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'elec',
    title: 'Electrical & Technical Maintenance',
    description: '24/7 emergency repairs, fault diagnostics, and preventive maintenance by certified professionals.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 'inst',
    title: 'Electrical Installations',
    description: 'Comprehensive wiring, panel setup, lighting, and industrial machinery electrical systems.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 'supp',
    title: 'Technical Support Services',
    description: 'Expertise in UPS systems, generators, smart automation, and meter installations.',
    icon: '🛠️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 'safe',
    title: 'Safety & Compliance',
    description: 'Rigorous electrical inspections, earthing, and maintenance of high-voltage systems (MCB/ACB/VCB).',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1470'
  }
];

export const STATS: Stat[] = [
  { label: 'Emergency Support', value: '24/7' },
  { label: 'Safety Compliance', value: '100', suffix: '%' },
  { label: 'Client Satisfaction', value: '98', suffix: '%' },
  { label: 'Projects Completed', value: '500', suffix: '+' }
];
