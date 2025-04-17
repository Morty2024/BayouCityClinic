import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "../components/PageTransition";
import { AuthProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </AuthProvider>
  );
}
