import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "./components/Sidebar";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader
          height={2}
          color="#27AE60"
          easing="cubic-bezier(0.53,0.21,0,1)"
        />
        <div className="flex gap-1 h-screen">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-full overflow-y-auto min-h-screen bg-base-200 sm:pl-64 pb-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
