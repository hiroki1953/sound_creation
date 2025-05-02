import { Navbar } from "@/components/navbar";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ------ Header ------ */}
        <header className="bg-white shadow">
          <Navbar />
        </header>

        {/* ------ Main ------ */}
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
