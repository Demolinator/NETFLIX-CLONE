import Header from "@/components/header";
import "@/styles/globals.css";
import "@/styles/Header.css"
import "@/styles/faq.css"
import "@/styles/login.css"
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
