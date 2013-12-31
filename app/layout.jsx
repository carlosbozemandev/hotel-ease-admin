
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'
import CustomProvider from "@/components/CustomProvider";

export const metadata = {
  title: "HostelEase",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
