import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const karla = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Like-Twitter",
  description: "Like-Twitter by Richard Ybañez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased text-gray-200 bg-black`}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
          {children}
        </GoogleOAuthProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
