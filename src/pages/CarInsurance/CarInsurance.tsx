import React from 'react';

const CarInsurance: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Car Insurance Options</h1>
      <p className="mb-4">
        Explore our range of car insurance options tailored to meet your needs. Whether you're looking for comprehensive coverage or basic liability, we have plans that fit your budget and requirements.
      </p>
      <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Competitive rates</li>
        <li>Flexible coverage options</li>
        <li>24/7 customer support</li>
        <li>Easy claims process</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Get a Quote</h2>
      <p>
        Contact us today to get a personalized quote and find the best car insurance plan for you!
      </p>
    </div>
  );
};

export default CarInsurance;