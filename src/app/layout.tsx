import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./global.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "天文気象部",
  description: "天文気象部のサイト",
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}