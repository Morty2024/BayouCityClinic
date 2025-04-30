import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import HeroBackground from '../components/HeroBackground';

export default function Home() {
  useEffect(() => {
    // Animation for hero section elements on page load
    const heroElements = document.querySelectorAll('.animate-on-load');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-active');
      }, 300 * index);
    });
  }, []);

  // Using actual service icons from the Icons folder
  const primaryCareIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Primary Care Icon.png" 
      alt="Primary Care Icon" 
      width={80} 
      height={80} 
    />
  );

  const pediatricCareIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Pediatric Care.png" 
      alt="Pediatric Care Icon" 
      width={80} 
      height={80} 
    />
  );

  const womensHealthIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Women Health.png" 
      alt="Women's Health Icon" 
      width={80} 
      height={80} 
    />
  );

  const preventiveServicesIcon = (
    <Image 
      src="/Icons/Bayou City Clinic - Preventive Services.png" 
      alt="Preventive Services Icon" 
      width={80} 
      height={80} 
    />
  );

  return (
    <div className="min-h-screen bg-beige dark:bg-gray-900">
      <Head>
        <title>Bayou City Clinic - Your Health, Our Priority</title>
        <meta name="description" content="Comprehensive, compassionate healthcare for you and your family at Bayou City Clinic in Houston, TX." />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .animate-on-load {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .animate-active {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </Head>

      <Navbar />

      {/* Hero Section - Full Width with Background Image */}
      <section className="w-full relative h-[500px] md:h-[600px] lg:h-[650px]">
        {/* Using the hero background image */}
        <HeroBackground imagePath="/assets/Bayou City Clinic - Doctor Meeting Patient.png" />
        
        {/* Content overlay */}
        <div className="container mx-auto h-full relative z-10">
          <div className="max-w-xl absolute top-1/2 transform -translate-y-1/2 px-6 py-5 rounded-lg bg-white/20 backdrop-blur-sm shadow-md">
            <h1 className="text-5xl font-bold text-dark-blue mb-4 animate-on-load">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-on-load">
              Comprehensive, compassionate care for you and your family.
            </p>
            <Link href="/appointments" className="inline-block bg-[#3f775e] text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-[#4c8f73] hover:text-white transition-all duration-300 animate-on-load shadow-md">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-dark-blue dark:text-white mb-12 animate-on-load">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Primary Care" 
              description="Personalized primary care for all ages." 
              icon={primaryCareIcon} 
              href="/services"
            />
            <ServiceCard 
              title="Pediatric Care" 
              description="Expert medical care for infants, children, and adolescents." 
              icon={pediatricCareIcon} 
              href="/services"
            />
            <ServiceCard 
              title="Women's Health" 
              description="Comprehensive women's health services for all stages of life." 
              icon={womensHealthIcon} 
              href="/services"
            />
            <ServiceCard 
              title="Preventive Services" 
              description="Screenings and preventive care to keep you healthy." 
              icon={preventiveServicesIcon} 
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="flex items-center mb-4 animate-on-load">
                <Image 
                  src="/Icons/Bayou City Clinic - stethoscope.png" 
                  alt="Stethoscope Icon" 
                  width={40} 
                  height={40}
                  className="mr-3"
                />
                <h2 className="text-3xl font-bold text-dark-blue dark:text-white">About Our Clinic</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 animate-on-load">
                Founded with the mission to provide comprehensive, patient-centered healthcare, 
                Bayou City Clinic has been serving the Houston community with dedication and excellence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 animate-on-load">
                Our team of experienced healthcare professionals is committed to your well-being, 
                offering personalized care in a comfortable and welcoming environment.
              </p>
              <Link href="/about" className="text-[#3f775e] hover:text-[#4c8f73] font-medium transition-all duration-300 inline-flex items-center group animate-on-load">
                Learn more about us 
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>
            <div className="md:w-1/2 animate-on-load">
              {/* Update placeholder with actual clinic exterior image */}
              <div className="h-64 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/assets/Bayou City Clinic - Exterior.png"
                  alt="Bayou City Clinic Exterior"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-on-load">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-on-load">
            Our team is ready to provide you with the care you deserve. 
            Contact us today to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+17135550194" className="bg-[#3f775e] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#4c8f73] transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-on-load">
              Call (713) 555-0194
            </a>
            <Link href="/appointments" className="bg-[#3f775e] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#4c8f73] transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-on-load">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
      
      {/* Scroll animation intersection observer */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate-active');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.animate-on-load').forEach(element => {
              observer.observe(element);
            });
          });
        `
      }} />

      <Footer />
    </div>
  );
}
