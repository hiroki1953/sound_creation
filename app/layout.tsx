import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ------ Header ------ */}
        <header className="bg-white shadow">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold">
              SoundOverflow
            </Link>
            <Link
              href="/ask"
              className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500"
            >
              質問する
            </Link>
          </nav>
        </header>

        {/* ------ Main ------ */}
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
