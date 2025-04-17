import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "../components/PageTransition";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </ThemeProvider>
  );
}
