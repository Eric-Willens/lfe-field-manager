import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakefront Construction Operations",
  description:
    "A streamlined construction workspace with one consistent filter system across units, plans, crews, punch, and attention.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
