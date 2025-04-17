import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  // Using actual service icons from the Icons folder
  const primaryCareIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Primary Care Icon.svg" 
      alt="Primary Care Icon" 
      width={80} 
      height={80} 
    />
  );

  const pediatricCareIcon = (
    <Image 
      src="/Icons/Bayou City Clinic-Pediatric Care Icon.svg" 
      alt="Pediatric Care Icon" 
      width={80} 
      height={80} 
    />
  );

  const womensHealthIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Women Health Icon.svg" 
      alt="Women's Health Icon" 
      width={80} 
      height={80} 
    />
  );

  const preventiveServicesIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Preventive Services Icon.svg" 
      alt="Preventive Services Icon" 
      width={80} 
      height={80} 
    />
  );

  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>Services | Bayou City Clinic</title>
        <meta name="description" content="Healthcare services offered by Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-dark-blue mb-8">Our Services</h1>
        <p className="text-xl text-gray-700 mb-12">
          We offer a comprehensive range of healthcare services for you and your family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ServiceCard 
            title="Primary Care" 
            description="Personalized primary care for all ages." 
            icon={primaryCareIcon} 
            href="/services/primary-care"
          />
          <ServiceCard 
            title="Pediatric Care" 
            description="Expert medical care for infants, children, and adolescents." 
            icon={pediatricCareIcon} 
            href="/services/pediatric-care"
          />
          <ServiceCard 
            title="Women's Health" 
            description="Comprehensive women's health services for all stages of life." 
            icon={womensHealthIcon} 
            href="/services/womens-health"
          />
          <ServiceCard 
            title="Preventive Services" 
            description="Screenings and preventive care to keep you healthy." 
            icon={preventiveServicesIcon} 
            href="/services/preventive-services"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Additional Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Chronic Disease Management
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Immunizations
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lab Services
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Health Screenings
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mental Health Services
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Telehealth Consultations
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 