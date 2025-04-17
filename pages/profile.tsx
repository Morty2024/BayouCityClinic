import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import AuthGuard from '../components/AuthGuard';

// Initial user data - in a real app, this would come from the API/auth context
const initialUserData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
};

const Profile: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Populate form with user data when available
  useEffect(() => {
    if (user) {
      setUserData(prevData => ({
        ...prevData,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        // Other fields would come from the user object in a real implementation
      }));
    }
  }, [user]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [user, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would be an API call to update the user profile
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
      setIsEditing(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessage({ text: 'Failed to update profile. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return null; // AuthGuard will handle loading state
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-beige">
        <Head>
          <title>Your Profile | Bayou City Clinic</title>
          <meta name="description" content="Manage your Bayou City Clinic patient profile" />
        </Head>

        <Navbar />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-dark-blue text-white flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Your Profile</h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
              
              <div className="p-6">
                {message.text && (
                  <div className={`mb-6 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={userData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={userData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                          disabled={!isEditing}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={userData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-dark-green hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 disabled:opacity-50"
                      >
                        {isLoading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  )}
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h2 className="text-xl font-semibold text-dark-blue mb-4">Account Security</h2>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-gray-700 font-medium">Password</h3>
                      <p className="text-gray-500">Last changed: Never</p>
                    </div>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition duration-300">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
};

export default Profile; 