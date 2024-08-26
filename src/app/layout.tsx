import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barbie for Beauty",
  description: "Beauty Related",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex min-h-screen flex-col items-center justify-center p-24 h-screen overscroll-none overflow-hidden ">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
            <Link href="/">
              <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
                <code className="font-mono font-bold">BarbieForBeauty</code>
              </nav>
            </Link>
            <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none ">
              {/* <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
            > */}
              <Link
                href="/book"
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              >
                By{" "}
                <Image
                  src="/Barbie_Logo.svg.png"
                  alt="Barbie Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </Link>
              {/* </a> */}
            </div>
          </div>
          {children}
        </section>
      </body>
    </html>
  );
}
