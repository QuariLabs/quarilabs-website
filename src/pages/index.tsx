import Footer from "@/components/sections/Footer";
import GetToKnowUs from "@/components/sections/GetToKnowUs";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuariLabs</title>
        <meta property="og:site_name" content="QuariLabs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We build high-demand blockchain DApps and infrastructure in the space."
        />
        <meta property="og:locale" content="en_EN" />
        <meta property="twitter:url" content="https://twitter.com/QuariLabs" />
        <meta property="twitter:title" content="@QuariLabs" />
        <meta
          property="twitter:description"
          content="We build high-demand blockchain DApps and infrastructure in the space."
        />
        <meta property="twitter:site" content="www.querilabs.com" />
        <meta property="twitter:creator" content="@QuariLabs" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <GetToKnowUs />
        <Project />
        <Footer />
      </main>
    </>
  );
}
