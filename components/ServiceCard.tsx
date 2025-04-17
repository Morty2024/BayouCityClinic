import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href = '/services',
}) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer">
        <div className="flex justify-center mb-6 transition-transform duration-300 hover:scale-110">{icon}</div>
        <h3 className="text-xl font-semibold text-dark-blue mb-3 text-center">{title}</h3>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <div className="text-center">
          <span className="text-dark-green font-medium inline-flex items-center group">
            Learn more 
            <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 