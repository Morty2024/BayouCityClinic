import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const WomensHealth: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige dark:bg-gray-900">
      <Head>
        <title>Women&apos;s Health | Bayou City Clinic</title>
        <meta name="description" content="Comprehensive women's health services at Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-6">Women&apos;s Health</h1>
          
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            We provide comprehensive women&apos;s health services tailored to address the unique health 
            needs of women at every stage of life. Our compassionate team is dedicated to providing 
            preventive care, diagnosis, and treatment with sensitivity and understanding.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/Bayou City Clinic - Women Health.png" 
                  alt="Well-Woman Exams" 
                  width={50} 
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Well-Woman Exams</h2>
                <p className="text-gray-700 dark:text-gray-300">Annual preventive care visits including pelvic exams, Pap tests, and breast exams.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/pregnancy-icon.png" 
                  alt="Prenatal Care" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Prenatal Care</h2>
                <p className="text-gray-700 dark:text-gray-300">Care during pregnancy to monitor the health of both mother and baby.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/menopause-icon.png" 
                  alt="Menopause Management" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Menopause Management</h2>
                <p className="text-gray-700 dark:text-gray-300">Support and treatment for symptoms related to hormonal changes during menopause.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/Icons/family-planning-icon.png" 
                  alt="Family Planning" 
                  width={50} 
                  height={50}
                  className="dark:invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark-blue dark:text-white mb-2">Family Planning</h2>
                <p className="text-gray-700 dark:text-gray-300">Counseling and services for contraception and reproductive health.</p>
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

export default WomensHealth; 