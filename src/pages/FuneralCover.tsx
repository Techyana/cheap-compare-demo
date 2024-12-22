import React from 'react';

const FuneralCover: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Funeral Cover Options</h1>
      <p className="mb-4">
        Funeral cover provides financial assistance to help cover the costs associated with funeral services. 
        It ensures that your loved ones are not burdened with these expenses during a difficult time.
      </p>
      <h2 className="text-xl font-semibold mb-2">Why Choose Funeral Cover?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Peace of mind for you and your family.</li>
        <li>Flexible payment options to suit your budget.</li>
        <li>Coverage for various funeral services and arrangements.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Available Plans</h2>
      <p>Explore our range of funeral cover plans tailored to meet your needs.</p>
      {/* Add InsuranceCard components here to display different plans */}
    </div>
  );
};

export default FuneralCover;