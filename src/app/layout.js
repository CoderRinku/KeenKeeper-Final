import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KeenKeeper",
  description: "Your personal shelf of meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <div className="min-h-screen">
          {children}
        </div>
        
        <Footer />
        {/* toast container for notifications */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}