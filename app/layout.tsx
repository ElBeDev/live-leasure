import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Live-Leisure | Premium Travel Membership",
  description: "High savings on your next vacation. Access exclusive deals on hotels, flights, cruises, tours and more all over the world.",
  keywords: ["travel", "vacation", "membership", "discounts", "hotels", "flights", "cruises"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
