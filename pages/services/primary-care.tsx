import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PrimaryCare: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige dark:bg-gray-900">
      <Head>
        <title>Primary Care | Bayou City Clinic</title>
        <meta name="description" content="Comprehensive primary care services at Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-6">Primary Care</h1>
          
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            We provide comprehensive primary care services to maintain your overall health and well-being.
            Our experienced team delivers personalized care for patients of all ages, focusing on 
            prevention, diagnosis, and treatment of common illnesses and chronic conditions.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/Bayou City Clinic - Primary Care Icon.png" 
                  alt="Preventive Care" 
                  width={50} 
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Preventive Care</h2>
                <p className="text-gray-700 dark:text-gray-300">Regular check-ups, screenings, and immunizations to prevent illness and maintain health.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/diagnosis-icon.png" 
                  alt="Diagnosis and Treatment" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Diagnosis and Treatment</h2>
                <p className="text-gray-700 dark:text-gray-300">Evaluation and management of acute illnesses, infections, and injuries.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/chronic-care-icon.png" 
                  alt="Chronic Disease Management" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Chronic Disease Management</h2>
                <p className="text-gray-700 dark:text-gray-300">Ongoing care for conditions like diabetes, hypertension, and heart disease.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/health-education-icon.png" 
                  alt="Health Education" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Health Education</h2>
                <p className="text-gray-700 dark:text-gray-300">Guidance on lifestyle changes, nutrition, and exercise to improve overall health.</p>
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

export default PrimaryCare; 