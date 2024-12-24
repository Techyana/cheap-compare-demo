import React from 'react';

const HealthInsurance: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Health Insurance Plans</h1>
      <p className="mb-4">
        Explore our range of health insurance plans designed to meet your needs. We offer comprehensive coverage options that ensure you and your family are protected.
      </p>
      <h2 className="text-xl font-semibold mb-2">Benefits of Our Health Insurance:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access to a wide network of healthcare providers</li>
        <li>Preventive care services at no additional cost</li>
        <li>Flexible plan options to suit your budget</li>
        <li>24/7 customer support for all your inquiries</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Get a Quote:</h2>
      <p>
        Contact us today to get a personalized quote and find the best health insurance plan for you!
      </p>
    </div>
  );
};

export default HealthInsurance;