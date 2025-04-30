import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "../components/PageTransition";
import { AuthProvider as AppAuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from "react-oidc-context";
import { useEffect, useState } from "react";

// Cognito OIDC configuration - replace with your own values from AWS Cognito
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_Jsf23aKJN",
  client_id: "5svs97v0pkoauc5a42vsoascrd",
  redirect_uri: "https://bayoucityclinic.xyz/",
  response_type: "code",
  scope: "phone openid email",
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  // This is to prevent SSR issues with the AuthProvider
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <AppAuthProvider>
          <AnimatePresence mode="wait">
            <PageTransition key={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </AnimatePresence>
        </AppAuthProvider>
      </ThemeProvider>
    );
  }
  
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <AppAuthProvider>
          <AnimatePresence mode="wait">
            <PageTransition key={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </AnimatePresence>
        </AppAuthProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
