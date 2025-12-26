
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Contact = 'contact'
}
