import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Create a loading component to show while the client page loads
const LoadingPage = () => (
  <div className="min-h-screen bg-beige flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-t-4 border-dark-green rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-dark-blue text-xl">Loading...</p>
    </div>
  </div>
);

// Dynamically import the actual login component with no SSR
const LoginClientSide = dynamic(
  () => import('../components/LoginPage'),
  { 
    ssr: false,
    loading: () => <LoadingPage />
  }
);

// Server-side wrapper that only renders the minimal shell
const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>Login | Bayou City Clinic</title>
        <meta name="description" content="Login to your Bayou City Clinic patient account" />
      </Head>

      <Navbar />
      <LoginClientSide />
      <Footer />
    </div>
  );
};

// Explicitly disable static generation for this page
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default LoginPage; 