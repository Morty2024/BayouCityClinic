import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import AuthGuard from '../components/AuthGuard';

// Mock data - in a real app this would come from an API
const upcomingAppointments = [
  { id: 1, date: '2023-07-15', time: '10:00 AM', doctor: 'Dr. Amara Whitfield', type: 'Annual Physical' },
  { id: 2, date: '2023-08-02', time: '2:30 PM', doctor: 'Dr. Leo Ramirez', type: 'Follow-up Visit' },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null; // AuthGuard will handle loading state
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-beige">
        <Head>
          <title>Patient Dashboard | Bayou City Clinic</title>
          <meta name="description" content="Your Bayou City Clinic patient dashboard" />
        </Head>

        <Navbar />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-3xl font-bold text-dark-blue mb-2">Welcome, {user.firstName}!</h1>
              <p className="text-gray-600">Manage your appointments and medical information</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link href="/appointments" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-dark-blue mb-2">Schedule Appointment</h2>
                <p className="text-gray-600">Book a new appointment with one of our providers</p>
              </Link>
              
              <Link href="/dashboard/medical-records" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-dark-blue mb-2">Medical Records</h2>
                <p className="text-gray-600">View your medical history and test results</p>
              </Link>
              
              <Link href="/profile" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-dark-blue mb-2">Profile Settings</h2>
                <p className="text-gray-600">Update your personal information and preferences</p>
              </Link>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 bg-dark-blue text-white">
                <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
              </div>
              <div className="p-6">
                {upcomingAppointments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-4">Date</th>
                          <th className="py-2 px-4">Time</th>
                          <th className="py-2 px-4">Provider</th>
                          <th className="py-2 px-4">Type</th>
                          <th className="py-2 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingAppointments.map((appointment) => (
                          <tr key={appointment.id} className="border-b">
                            <td className="py-3 px-4">{appointment.date}</td>
                            <td className="py-3 px-4">{appointment.time}</td>
                            <td className="py-3 px-4">{appointment.doctor}</td>
                            <td className="py-3 px-4">{appointment.type}</td>
                            <td className="py-3 px-4">
                              <button className="text-dark-green hover:underline">View</button>
                              <span className="mx-2">|</span>
                              <button className="text-red-600 hover:underline">Cancel</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-600">You have no upcoming appointments.</p>
                )}
                <div className="mt-4">
                  <Link href="/appointments" className="text-dark-green hover:underline">
                    Schedule a new appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Health Summary */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-dark-blue text-white">
                <h2 className="text-xl font-semibold">Health Summary</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Your last visit was on <strong>June 5, 2023</strong> with <strong>Dr. Amara Whitfield</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-dark-blue mb-2">Medications</h3>
                    <p className="text-gray-600">No current medications on file.</p>
                    <Link href="/dashboard/medications" className="mt-2 inline-block text-dark-green hover:underline">
                      View all medications
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-dark-blue mb-2">Allergies</h3>
                    <p className="text-gray-600">No allergies on file.</p>
                    <Link href="/dashboard/allergies" className="mt-2 inline-block text-dark-green hover:underline">
                      View all allergies
                    </Link>
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

export default Dashboard; 