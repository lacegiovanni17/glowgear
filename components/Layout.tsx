import React, { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Glowgear e-commerce</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>

        <main>{children}</main>

        <footer>footer</footer>
      </div>
    </>
  );
}
