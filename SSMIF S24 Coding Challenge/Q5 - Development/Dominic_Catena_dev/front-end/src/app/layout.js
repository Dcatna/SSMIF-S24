import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
export const metadata = {
  title: "SSMIF S24 Coding Challenge"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className="bg-neutral-50">
        <Navbar></Navbar> {/*we pass the navbar so it is applied to all its children */}
        {children}
        </body>
    </html>
  );
}
