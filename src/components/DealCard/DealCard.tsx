import React from 'react';

interface DealCardProps {
  title: string;
  description: string;
  price: string;
  link: string;
}

const DealCard: React.FC<DealCardProps> = ({ title, description, price, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <div className="font-bold text-lg mb-2">{price}</div>
      <a href={link} className="text-blue-500 hover:text-blue-700">
        Learn More
      </a>
    </div>
  );
};

export default DealCard;