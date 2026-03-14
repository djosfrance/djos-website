import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ProductSection from "@/components/home/ProductSection";
import StorySection from "@/components/home/StorySection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductSection />
        <StorySection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}