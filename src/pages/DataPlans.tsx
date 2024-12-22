import React from 'react';

const DataPlans: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Plans</h1>
      <p className="mb-4">
        Explore our range of data plans tailored to meet your needs. Whether you're a light user or a heavy data consumer, we have options for everyone.
      </p>
      <h2 className="text-xl font-semibold mb-2">Available Data Plans</h2>
      <ul className="list-disc list-inside">
        <li>Plan A: 5GB - $20/month</li>
        <li>Plan B: 10GB - $35/month</li>
        <li>Plan C: 20GB - $50/month</li>
        <li>Plan D: Unlimited - $70/month</li>
      </ul>
      <p className="mt-4">
        Contact us for more details or to sign up for a plan that suits you!
      </p>
    </div>
  );
};

export default DataPlans;