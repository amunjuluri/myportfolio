import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const myFont = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  
});


export const metadata: Metadata = {
  title: "Anand Munjuluri",
  description: "Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${myFont.className} ${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
