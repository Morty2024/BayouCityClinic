import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>Contact Us | Bayou City Clinic</title>
        <meta name="description" content="Contact Bayou City Clinic for appointments, questions, or information" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-dark-blue text-center mb-8">Contact Us</h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          We are here to help. Reach out to us with any questions or to schedule an appointment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-dark-blue mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-dark-blue text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-600 mt-2">
                We&apos;ll get back to you as soon as possible.
              </p>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-dark-blue mb-6">Clinic Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-dark-blue">Address</h3>
                    <p className="text-gray-700">123 Medical Parkway<br />Houston, TX 77001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-dark-blue">Phone</h3>
                    <p className="text-gray-700">(713) 555-0194</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-dark-blue">Email</h3>
                    <p className="text-gray-700">info@bayoucityclinic.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-dark-blue">Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="rounded-lg shadow-md overflow-hidden h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4211005899694!2d-95.46789282357902!3d29.723754935811373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c13d77e5b09f%3A0x694f930fc2efa1c!2sTexas%20Medical%20Center!5e0!3m2!1sen!2sus!4v1712375305499!5m2!1sen!2sus" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bayou City Clinic Location"
                aria-label="Map showing Bayou City Clinic location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact; 