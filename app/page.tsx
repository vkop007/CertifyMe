import Header from "@/components/header/Header";
import HeroSection from "@/components/HeroSection";
import ExploreCoursesSection from "@/components/ExploreCoursesSection";
import CategorySection from "@/components/CategorySection";
import EnquirySection from "@/components/EnquirySection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/footer/Footer";
import FAQ from "@/components/FAQSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClientsSection from "@/components/ClientsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <ExploreCoursesSection />
      <EnquirySection />
      <ClientsSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FAQ />
      <Footer />
    </main>
  );
}
