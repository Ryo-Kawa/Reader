import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./global.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "天文気象部 文化祭",
  description: "天文気象部の文化祭用のサイトです。",
  keywords: ["開成学園", "天文気象部", "文化祭"],
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
