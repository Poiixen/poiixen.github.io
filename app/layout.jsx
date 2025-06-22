"use client"; // Keep the "use client" directive for the client-side code

import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client
  }, []);

  return (
    <html lang="en">
      <body className={isClient ? jetbrainsMono.variable : ''}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
