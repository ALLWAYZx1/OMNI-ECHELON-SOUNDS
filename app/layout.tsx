import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Omni Echelon Sounds",
  description: "Cinematic Pressure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics (SAFE placement) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P5TQMTZZTV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P5TQMTZZTV');
          `}
        </Script>

      </body>
    </html>
  );
}
