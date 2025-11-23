export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Building' | 'Sparkles' | 'Home' | 'HardHat' | 'Calendar' | 'Droplets';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}