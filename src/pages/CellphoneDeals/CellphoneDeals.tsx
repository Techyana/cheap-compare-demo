import React from 'react';
import DealCard from '../../components/DealCard/DealCard';

const CellphoneDeals: React.FC = () => {
  const deals = [
    {
      id: 1,
      title: 'Unlimited Talk & Text',
      description: 'Get unlimited talk and text with our best cellphone plan.',
      price: '$30/month',
    },
    {
      id: 2,
      title: '5GB Data Plan',
      description: 'Enjoy 5GB of high-speed data for browsing and streaming.',
      price: '$40/month',
    },
    {
      id: 3,
      title: 'Family Plan',
      description: 'Save more with our family plan for up to 4 lines.',
      price: '$100/month',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cellphone Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map(deal => (
          <DealCard key={deal.id} title={deal.title} description={deal.description} price={deal.price} />
        ))}
      </div>
    </div>
  );
};

export default CellphoneDeals;