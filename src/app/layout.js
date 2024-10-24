import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Scholar Quill",
  description: "Notes for unversity students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="bg-green-600 py-2 text-center font-semibold text-gray-50 text-sm flex items-center justify-center">Hey please complete your account borading. <Link href="/" className="ml-2 py-0.5 px-3 bg-white text-black rounded">Complete onboarding</Link></div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
