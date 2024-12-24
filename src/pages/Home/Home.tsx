import React from 'react';
import InsuranceCard from '../../components/InsuranceCard/InsuranceCard';
import DealCard from '../../components/DealCard/DealCard';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={`container mx-auto p-4 ${styles.container}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Cheap Compare</h1>
      <p className="mb-4 text-center">Explore the best deals and insurance options tailored for you.</p>
      
      <section className={`mb-8 ${styles.section}`}>
        <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>Insurance Options</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${styles.cardGrid}`}>
          <InsuranceCard 
            title="Car Insurance" 
            description="Get the best coverage for your vehicle." 
            imageUrl="https://via.placeholder.com/150" 
            link="/car-insurance" 
          />
          <InsuranceCard 
            title="Health Insurance" 
            description="Protect your health with our plans." 
            imageUrl="https://via.placeholder.com/150" 
            link="/health-insurance" 
          />
          <InsuranceCard 
            title="Funeral Cover" 
            description="Plan ahead with our funeral cover options." 
            imageUrl="https://via.placeholder.com/150" 
            link="/funeral-cover" 
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>Latest Deals</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${styles.cardGrid}`}>
          <DealCard 
            title="Cellphone Deals" 
            description="Check out the latest cellphone offers." 
            price="R899" 
            link="/cellphone-deals" 
          />
          <DealCard 
            title="Data Plans" 
            description="Find the best data plans for your needs." 
            price="R129/month" 
            link="/data-plans" 
          />
          <DealCard 
            title="Wi-Fi Fiber & LTE" 
            description="Get connected with our internet deals." 
            price="R549/month" 
            link="/wifi-fiber-lte" 
          />
        </div>
      </section>
    </div>
  );
};

export default Home;