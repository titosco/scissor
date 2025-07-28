import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./_components/Navigation";
import Sections from "./sections/Sections";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navigation />
      <Sections />
    </div>
  );
}
