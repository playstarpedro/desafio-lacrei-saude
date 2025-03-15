"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
        <Button typeStyle="primary">
          Click me
        </Button>
        <Button typeStyle="secondary">
          Click me
        </Button>
      <Footer />
    </main>
  );
}
