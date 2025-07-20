import type { Metadata } from "next";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Bobby Palazzi",
  description: "Bobby Palazzi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,2,300,501,401,901&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi">
        {children}
      </body>
    </html>
  );
}
