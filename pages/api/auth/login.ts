import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "../components/PageTransition";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);
  
  return (
    <SessionProvider session={pageProps.session}>
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </SessionProvider>
  );
}

export function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);
  
  return (
    <div className="min-h-screen bg-beige">
      <Head>
        <title>Login | Bayou City Clinic</title>
        <meta name="description" content="Login to your Bayou City Clinic patient account" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-dark-blue text-center mb-6">Login to Your Account</h2>
            
            <button
              onClick={() => signIn("azure-ad-b2c")}
              className="w-full bg-dark-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Sign in with Azure B2C
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}