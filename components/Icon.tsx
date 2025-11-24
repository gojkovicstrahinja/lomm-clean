import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Home, 
  HardHat, 
  CalendarDays, 
  Droplets,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Send,
  Bot
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'Building': return <Building2 className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Home': return <Home className={className} />;
    case 'HardHat': return <HardHat className={className} />;
    case 'Calendar': return <CalendarDays className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Check': return <CheckCircle2 className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Menu': return <Menu className={className} />;
    case 'Close': return <X className={className} />;
    case 'Send': return <Send className={className} />;
    case 'Bot': return <Bot className={className} />;
    default: return <Sparkles className={className} />;
  }
};