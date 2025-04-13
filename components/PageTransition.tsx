import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // Define our animation variants
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    enter: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function
        when: "beforeChildren",
        staggerChildren: 0.1,
      } 
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      } 
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 