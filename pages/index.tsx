import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>Home Page</Layout>
    </div>
  );
}
