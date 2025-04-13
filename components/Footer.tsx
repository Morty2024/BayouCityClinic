import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Bayou City Clinic</h3>
            <p className="mb-2">123 Medical Parkway</p>
            <p className="mb-2">Houston, TX 77001</p>
            <p className="mb-2">
              <a href="tel:+17135550194" className="hover:text-green-300">
                (713) 555-0194
              </a>
            </p>
            <p>
              <a href="mailto:info@bayoucityclinic.com" className="hover:text-green-300">
                info@bayoucityclinic.com
              </a>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="mb-2">Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Bayou City Clinic. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Bayou City Clinic - Providing compassionate healthcare since 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 