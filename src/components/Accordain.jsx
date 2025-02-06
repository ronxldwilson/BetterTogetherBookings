'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto w-full md:w-1/2 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-300 rounded-xl overflow-hidden shadow-md bg-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none transition-colors duration-300 hover:bg-gray-100"
          >
            <span className="text-lg text-gray-900">{faq.question}</span>
            <motion.span 
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-xl"
            >
              ▼
            </motion.span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-gray-700 text-md leading-relaxed">{faq.answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
