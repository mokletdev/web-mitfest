import "./globals.css";
import { NextAuthProvider } from "./components/SessionProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Moklet IT Fest 2023",
    template: "%s | Moklet IT Fest 2023",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className={"max-w-screen-2xl overflow-x-hidden" + roboto.className}>
        <NextAuthProvider>
          <ToastContainer />
          <NextTopLoader color="#b52930" />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
