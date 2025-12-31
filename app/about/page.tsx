import AboutHero from "../../components/AboutHero";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TopVendors from "../../components/TopVendors";
import AboutWho from "../../components/AboutWho";
import MissionVision from "../../components/MissionVision";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <TopVendors />
      <AboutWho />
      <MissionVision />
      <Footer />
    </main>
  );
}
