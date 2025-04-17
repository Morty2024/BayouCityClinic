import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PediatricCarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige dark:bg-gray-900">
      <Head>
        <title>Pediatric Care | Bayou City Clinic</title>
        <meta name="description" content="Comprehensive pediatric care services at Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-6">Pediatric Care</h1>
          
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            We provide comprehensive pediatric care to support the health
            and development of your child. Our experienced team offers
            a range of services tailored to meet the unique needs of
            children at every stage of growth.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/Bayou City Clinic - Pediatric Care.png" 
                  alt="Newborn Care" 
                  width={50} 
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Newborn Care</h2>
                <p className="text-gray-700 dark:text-gray-300">Specialized care for infants during the crucial early months.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/syringe-icon.png" 
                  alt="Vaccinations" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Vaccinations</h2>
                <p className="text-gray-700 dark:text-gray-300">Recommended immunizations to protect against various diseases.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/calendar-check-icon.png" 
                  alt="Routine Check-Ups" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Routine Check-Ups</h2>
                <p className="text-gray-700 dark:text-gray-300">Regular health assessments to monitor development.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/parent-icon.png" 
                  alt="Parental Guidance" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Parental Guidance</h2>
                <p className="text-gray-700 dark:text-gray-300">Advice and support for parents on child-rearing practices.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/appointments" className="bg-[#3f775e] text-white px-8 py-3 rounded-full hover:bg-[#4c8f73] transition-colors duration-300 transform hover:scale-105 text-center">
              Book Appointment
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PediatricCarePage; 