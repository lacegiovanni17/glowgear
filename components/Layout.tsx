import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - Glowgear e-commerce" : "Glowgear e-commerce"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <span className="text-lg font-bold">Glowgear e-commerce</span>
            </Link>
              <div>
              <Link href="/cart">
                <span className="p-2">Cart</span>
              </Link>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
              </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © 2023 Glowgear. Made with ❤️ in Lagos.</p>
        </footer>
      </div>
    </>
  );
}
