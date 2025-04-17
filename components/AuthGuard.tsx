import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=' + router.asPath);
    }
  }, [loading, router, user]);

  // Show loading state while checking authentication
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-dark-green border-solid rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  // User is authenticated, render the protected content
  return <>{children}</>;
};

export default AuthGuard; 