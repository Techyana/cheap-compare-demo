import React from 'react';
import InsuranceCard from '../components/InsuranceCard';
import DealCard from '../components/DealCard';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Affiliate Marketing Website</h1>
      <p className="mb-4">Explore the best deals and insurance options tailored for you.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Insurance Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InsuranceCard title="Car Insurance" description="Get the best coverage for your vehicle." />
          <InsuranceCard title="Health Insurance" description="Protect your health with our plans." />
          <InsuranceCard title="Funeral Cover" description="Plan ahead with our funeral cover options." />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DealCard title="Cellphone Deals" description="Check out the latest cellphone offers." />
          <DealCard title="Data Plans" description="Find the best data plans for your needs." />
          <DealCard title="Wi-Fi Fiber & LTE" description="Get connected with our internet deals." />
        </div>
      </section>
    </div>
  );
};

export default Home;