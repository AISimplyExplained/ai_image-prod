import React from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blood Drop Animation Demo',
  description: 'Interactive blood drop fill level animations',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://code.createjs.com/1.0.0/createjs.min.js"
          as="script"
        />
      </head>
      <body className={inter.className}>
        {/* Load CreateJS first */}
        <Script
          src="https://code.createjs.com/1.0.0/createjs.min.js"
          strategy="beforeInteractive"
          id="createjs"
        />

        {/* Load the blood drop animation code */}
        <Script
          src="/blood_drop.js"
          strategy="afterInteractive"
          id="blood-drop"
        />

        {/* Main content */}
        <div className="min-h-screen bg-gray-100">
          <main>
            {children}
          </main>

          {/* Optional: Add a footer */}
          <footer className="py-6 text-center text-gray-600">
            <p>Blood Drop Animation Demo © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}