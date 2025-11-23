import React from 'react';
import { LOGO_URL } from '../constants';

type LogoProps = {
  className?: string;
  alt?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = '', alt = 'L.O.M.M Clean' }) => {
  return (
    <img src={LOGO_URL} alt={alt} className={className} />
  );
};

export default Logo;
