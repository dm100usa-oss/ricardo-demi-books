// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricardo Demi Books",
  description:
    "Official collection of bilingual children's books by Ricardo Demi — stories that nurture imagination, empathy and curiosity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 leading-relaxed`}>
        <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
