import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>About Us | Bayou City Clinic</title>
        <meta name="description" content="Learn about Bayou City Clinic's history, mission, and healthcare providers" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-dark-blue text-center mb-8">About Bayou City Clinic</h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-blue mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Bayou City Clinic, our mission is to provide comprehensive, compassionate healthcare
            for individuals and families in the Houston area. We believe in treating the whole person,
            not just the symptoms, and strive to create lasting relationships with our patients built
            on trust and respect.
          </p>
          <p className="text-gray-700">
            Our goal is to be your partner in health, supporting your wellness journey through all stages
            of life with personalized care and advanced medical expertise.
          </p>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-blue mb-4">Our History</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2005 by Dr. Elizabeth Chen, Bayou City Clinic began as a small family practice
            with a vision to provide personalized healthcare that addressed the unique needs of our diverse
            Houston community.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, we&apos;ve grown to include additional specialties and providers, but our commitment
            to personalized care remains unchanged. We&apos;ve expanded our services while maintaining the
            warm, welcoming environment that makes our patients feel at home.
          </p>
          <p className="text-gray-700">
            Today, Bayou City Clinic stands as a trusted healthcare provider in the community, blending
            modern medical technology with compassionate, patient-centered care.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-dark-blue mb-8">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Medical Director */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Dr_ Amara_Whitfield-Medical Director.png"
                  alt="Dr. Amara Whitfield"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Dr. Amara Whitfield</h3>
              <p className="text-dark-green text-center mb-2">Medical Director</p>
              <p className="text-gray-700 text-center">
                Leading our medical team with expertise and compassion.
              </p>
            </div>

            {/* Lead Physician */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Dr Leo Ramirez - Lead Physician.png"
                  alt="Dr. Leo Ramirez"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Dr. Leo Ramirez</h3>
              <p className="text-dark-green text-center mb-2">Lead Physician</p>
              <p className="text-gray-700 text-center">
                Specialized in primary care with over 15 years of experience.
              </p>
            </div>

            {/* Lead Pediatrician */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Dr Evelyn Scott - Lead Pediatrician.png"
                  alt="Dr. Evelyn Scott"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Dr. Evelyn Scott</h3>
              <p className="text-dark-green text-center mb-2">Lead Pediatrician</p>
              <p className="text-gray-700 text-center">
                Dedicated to providing exceptional care for our youngest patients.
              </p>
            </div>

            {/* Clinic Manager */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Julian NG - Clinic Manager.png"
                  alt="Julian Ng"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Julian Ng</h3>
              <p className="text-dark-green text-center mb-2">Clinic Manager</p>
              <p className="text-gray-700 text-center">
                Ensuring our clinic operations run smoothly for optimal patient care.
              </p>
            </div>

            {/* Compliance Officer */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Rachel Dawson - Compliance Officer.png"
                  alt="Rachel Dawson"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Rachel Dawson</h3>
              <p className="text-dark-green text-center mb-2">Compliance Officer</p>
              <p className="text-gray-700 text-center">
                Maintaining our high standards of healthcare compliance and quality.
              </p>
            </div>

            {/* HR Manager */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Linda Park - HR Manager.png"
                  alt="Linda Park"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Linda Park</h3>
              <p className="text-dark-green text-center mb-2">HR Manager</p>
              <p className="text-gray-700 text-center">
                Supporting our team to deliver the best care possible.
              </p>
            </div>

            {/* Finance Manager */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Brianna Chen - Fianance Manager.png"
                  alt="Brianna Chen"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Brianna Chen</h3>
              <p className="text-dark-green text-center mb-2">Finance Manager</p>
              <p className="text-gray-700 text-center">
                Managing the financial aspects of our clinic with expertise.
              </p>
            </div>

            {/* IT Manager */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image 
                  src="/Personnel/Sean Donovan - IT Manager.png"
                  alt="Sean Donovan"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-blue text-center">Sean Donovan</h3>
              <p className="text-dark-green text-center mb-2">IT Manager</p>
              <p className="text-gray-700 text-center">
                Ensuring our technology supports excellent patient care.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-semibold text-dark-blue mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-2">Patient-Centered Care</h3>
              <p className="text-gray-700">
                We put our patients first, listening to their concerns and involving them in healthcare decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all aspects of care, from medical expertise to service delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-2">Compassion</h3>
              <p className="text-gray-700">
                We treat each patient with kindness, dignity, and respect, recognizing their individual needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and approaches to provide the best possible care.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About; 