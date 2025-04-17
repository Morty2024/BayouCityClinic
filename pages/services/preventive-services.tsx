import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PreventiveServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige dark:bg-gray-900">
      <Head>
        <title>Preventive Services | Bayou City Clinic</title>
        <meta name="description" content="Comprehensive preventive health services at Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-6">Preventive Services</h1>
          
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            We provide comprehensive preventive health services to help you maintain optimal health 
            and detect potential health issues before they become serious. Our preventive care approach 
            focuses on regular screenings, health risk assessments, and personalized wellness plans.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/Bayou City Clinic - Preventive Services.png" 
                  alt="Health Screenings" 
                  width={50} 
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Health Screenings</h2>
                <p className="text-gray-700 dark:text-gray-300">Regular screenings for common conditions like high blood pressure, diabetes, and cancer.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/immunization-icon.png" 
                  alt="Immunizations" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Immunizations</h2>
                <p className="text-gray-700 dark:text-gray-300">Vaccinations to prevent infectious diseases for all age groups.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/lifestyle-icon.png" 
                  alt="Lifestyle Counseling" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Lifestyle Counseling</h2>
                <p className="text-gray-700 dark:text-gray-300">Guidance on nutrition, exercise, stress management, and other lifestyle factors.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/risk-assessment-icon.png" 
                  alt="Health Risk Assessments" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Health Risk Assessments</h2>
                <p className="text-gray-700 dark:text-gray-300">Personalized evaluations to identify and address health risks early.</p>
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

export default PreventiveServices; 