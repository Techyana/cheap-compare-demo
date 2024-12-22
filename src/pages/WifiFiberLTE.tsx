import React from 'react';
import { motion } from 'framer-motion';

const WifiFiberLTE: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <h1 className="text-2xl font-bold mb-4">Wi-Fi Fiber and LTE Deals</h1>
      <p className="mb-4">
        Explore our competitive Wi-Fi fiber and LTE internet deals tailored to meet your connectivity needs. 
        Whether you're streaming, gaming, or working from home, we have the right plan for you.
      </p>
      <h2 className="text-xl font-semibold mb-2">Available Plans:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Fiber 100 Mbps - Perfect for streaming and browsing</li>
        <li>Fiber 500 Mbps - Ideal for multiple users and devices</li>
        <li>LTE Unlimited - Stay connected on the go</li>
        <li>LTE 10GB Plan - Great for light users</li>
      </ul>
      <p>
        Contact us today to find out more about our plans and how you can save on your internet bills!
      </p>
    </motion.div>
  );
};

export default WifiFiberLTE;