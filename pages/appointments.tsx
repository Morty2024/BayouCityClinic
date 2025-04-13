import React, { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppointmentTypes = [
  { id: 'wellness', name: 'Wellness Check-up' },
  { id: 'followup', name: 'Follow-up Visit' },
  { id: 'pediatric', name: 'Pediatric Care' },
  { id: 'womenshealth', name: 'Women\'s Health' },
  { id: 'physical', name: 'Physical Examination' },
  { id: 'urgent', name: 'Urgent Care' },
  { id: 'other', name: 'Other (please specify)' }
];

const Doctors = [
  { id: 'dr-whitfield', name: 'Dr. Amara Whitfield - Medical Director' },
  { id: 'dr-ramirez', name: 'Dr. Leo Ramirez - Lead Physician' },
  { id: 'dr-scott', name: 'Dr. Evelyn Scott - Lead Pediatrician' },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  appointmentType: string;
  appointmentTypeOther: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  newPatient: string;
  insuranceProvider: string;
  policyNumber: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  appointmentType?: string;
  appointmentTypeOther?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const Appointments: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    appointmentTypeOther: '',
    preferredDoctor: '',
    preferredDate: '',
    preferredTime: '',
    newPatient: 'no',
    insuranceProvider: '',
    policyNumber: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.appointmentType) errors.appointmentType = 'Please select an appointment type';
    if (formData.appointmentType === 'other' && !formData.appointmentTypeOther.trim()) {
      errors.appointmentTypeOther = 'Please specify appointment type';
    }
    if (!formData.preferredDate) errors.preferredDate = 'Please select a preferred date';
    if (!formData.preferredTime) errors.preferredTime = 'Please select a preferred time';
    
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission (in a real app, you would send this to your backend)
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          appointmentType: '',
          appointmentTypeOther: '',
          preferredDoctor: '',
          preferredDate: '',
          preferredTime: '',
          newPatient: 'no',
          insuranceProvider: '',
          policyNumber: '',
          message: ''
        });
      }, 1500);
    }
  };

  // Generate time slots from 8 AM to 5 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 8; i <= 16; i++) {
      const hour = i % 12 === 0 ? 12 : i % 12;
      const period = i < 12 ? 'AM' : 'PM';
      slots.push(`${hour}:00 ${period}`);
      slots.push(`${hour}:30 ${period}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>Schedule Appointment | Bayou City Clinic</title>
        <meta name="description" content="Schedule your appointment at Bayou City Clinic" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-dark-blue text-center mb-6">Schedule an Appointment</h1>
        
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Fill out the form below to request an appointment. Our team will confirm your appointment via email or phone.
          For urgent matters, please call us directly at <a href="tel:+17135550194" className="text-dark-green font-semibold">(713) 555-0194</a>.
        </p>

        {submitSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-3xl mx-auto mb-8" role="alert">
            <strong className="font-bold">Thank you!</strong>
            <p className="block sm:inline"> Your appointment request has been submitted successfully. We will contact you shortly to confirm your appointment.</p>
            <button 
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSubmitSuccess(false)}
            >
              Request Another Appointment
            </button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-dark-blue mb-4 pb-2 border-b border-gray-200">Personal Information</h2>
                </div>
                
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                    placeholder="(___) ___-____"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Are you a new patient? <span className="text-red-500">*</span></label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input 
                        type="radio" 
                        name="newPatient" 
                        value="yes"
                        checked={formData.newPatient === 'yes'}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-dark-green"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="radio" 
                        name="newPatient" 
                        value="no"
                        checked={formData.newPatient === 'no'}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-dark-green"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                {/* Appointment Details */}
                <div className="md:col-span-2 mt-4">
                  <h2 className="text-xl font-semibold text-dark-blue mb-4 pb-2 border-b border-gray-200">Appointment Details</h2>
                </div>
                
                <div>
                  <label htmlFor="appointmentType" className="block text-gray-700 mb-2">Appointment Type <span className="text-red-500">*</span></label>
                  <select 
                    id="appointmentType" 
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.appointmentType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  >
                    <option value="">Select appointment type</option>
                    {AppointmentTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                  {formErrors.appointmentType && <p className="text-red-500 text-sm mt-1">{formErrors.appointmentType}</p>}
                </div>
                
                {formData.appointmentType === 'other' && (
                  <div>
                    <label htmlFor="appointmentTypeOther" className="block text-gray-700 mb-2">Please specify <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="appointmentTypeOther" 
                      name="appointmentTypeOther"
                      value={formData.appointmentTypeOther}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${formErrors.appointmentTypeOther ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                    />
                    {formErrors.appointmentTypeOther && <p className="text-red-500 text-sm mt-1">{formErrors.appointmentTypeOther}</p>}
                  </div>
                )}
                
                <div>
                  <label htmlFor="preferredDoctor" className="block text-gray-700 mb-2">Preferred Doctor</label>
                  <select 
                    id="preferredDoctor" 
                    name="preferredDoctor"
                    value={formData.preferredDoctor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  >
                    <option value="">No preference</option>
                    {Doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="preferredDate" className="block text-gray-700 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    id="preferredDate" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-2 border ${formErrors.preferredDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  />
                  {formErrors.preferredDate && <p className="text-red-500 text-sm mt-1">{formErrors.preferredDate}</p>}
                </div>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-700 mb-2">Preferred Time <span className="text-red-500">*</span></label>
                  <select 
                    id="preferredTime" 
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.preferredTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green`}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                  {formErrors.preferredTime && <p className="text-red-500 text-sm mt-1">{formErrors.preferredTime}</p>}
                </div>
                
                {/* Insurance Information */}
                <div className="md:col-span-2 mt-4">
                  <h2 className="text-xl font-semibold text-dark-blue mb-4 pb-2 border-b border-gray-200">Insurance Information</h2>
                </div>
                
                <div>
                  <label htmlFor="insuranceProvider" className="block text-gray-700 mb-2">Insurance Provider</label>
                  <input 
                    type="text" 
                    id="insuranceProvider" 
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="policyNumber" className="block text-gray-700 mb-2">Policy Number</label>
                  <input 
                    type="text" 
                    id="policyNumber" 
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                  />
                </div>
                
                {/* Additional Information */}
                <div className="md:col-span-2 mt-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green"
                    placeholder="Please provide any additional information about your visit..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-dark-green hover:bg-dark-blue text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </button>
                </div>
                
                <div className="md:col-span-2 text-sm text-gray-600">
                  <p>Fields marked with <span className="text-red-500">*</span> are required.</p>
                  <p className="mt-2">
                    Note: This form is a request only. We will contact you to confirm your appointment. 
                    For urgent matters, please call us at <a href="tel:+17135550194" className="text-dark-green font-semibold">(713) 555-0194</a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Appointments; 