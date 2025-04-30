import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type AuthError = {
  message: string;
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<AuthError | null>(null);
  const [signInFunction, setSignInFunction] = useState<() => void>(() => {
    console.warn('Sign in function not loaded yet');
  });
  
  useEffect(() => {
    // Dynamically import auth logic to avoid SSR issues
    const loadAuth = async () => {
      try {
        // Dynamic import of the hook
        const authModule = await import('../hooks/useOidcAuth');
        const auth = authModule.default();
        
        setIsLoading(auth.isLoading);
        setAuthError(auth.error as AuthError | null);
        
        // Update sign in function
        setSignInFunction(() => auth.signIn);
        
        // Check if authenticated and redirect
        if (auth.isAuthenticated) {
          router.push('/dashboard');
        }
      } catch (err) {
        console.error('Error loading auth:', err);
        setIsLoading(false);
      }
    };
    
    loadAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-dark-green rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-blue text-xl">Loading authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-dark-blue text-center mb-6">Login to Your Account</h2>
          
          {authError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {authError.message}
            </div>
          )}
          
          <button
            onClick={signInFunction}
            className="w-full bg-dark-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50 mb-4"
          >
            Sign in with Cognito
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-dark-green hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage; 