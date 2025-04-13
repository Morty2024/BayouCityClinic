import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  imagePath: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imagePath }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Image
        src={imagePath}
        alt="Doctor with patient"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        style={{
          objectFit: 'cover',
          objectPosition: '65% 30%'
        }}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent md:from-slate-900/60 md:via-slate-800/30"></div>
    </div>
  );
};

export default HeroBackground; 