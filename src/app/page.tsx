"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen overscroll-none overflow-hidden flex items-center justify-center">
        <Link href="/book">
          <div className="relative flex items-center justify-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
              src="/barbieforbeauty.png"
              alt="BarbieForBeauty Logo"
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
