import type { Metadata, Viewport } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnePlus Service Center | Hyderabad - LB Nagar & Tarnaka Secunderabad",
  description:
    "Professional OnePlus mobile, tablet, and laptop repair services in Hyderabad (LB Nagar & Tarnaka Secunderabad). Fast 2-hour turnaround, genuine-quality parts, 90-day warranty.",
  keywords: [
    "OnePlus service center Hyderabad",
    "OnePlus service center LB Nagar",
    "OnePlus service center Tarnaka Secunderabad",
    "OnePlus screen replacement Hyderabad",
    "OnePlus battery repair Hyderabad",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#eb0028",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} scroll-smooth font-sans`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans bg-[#fbfbfd] text-zinc-900 selection:bg-[#eb0028] selection:text-white">
        {children}
      </body>
    </html>
  );
}
