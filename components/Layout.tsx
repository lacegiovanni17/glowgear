import React, { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = '' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Glowgear e-commerce' : 'Glowgear e-commerce'}</title>
        <meta name="description" content="Ecommerce Website"/>
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
