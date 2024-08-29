import type { Metadata } from "next";

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