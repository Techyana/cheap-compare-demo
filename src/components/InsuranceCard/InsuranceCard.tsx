import React from 'react';
import styles from './InsuranceCard.module.scss';

interface InsuranceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${styles.card}`}>
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="text-blue-500 hover:text-blue-800">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default InsuranceCard;