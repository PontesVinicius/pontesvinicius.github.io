import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinicius Pontes",
  description: "Página profissional de Vinicius Pontes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      id="first-html"
      lang="pt-br"
      data-theme="night"
      className="scroll-smooth"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
