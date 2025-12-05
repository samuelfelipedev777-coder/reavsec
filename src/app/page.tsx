import Header from "./components/Header";
import AboutPage from "./sections/AboutPage";
import BannerSection from "./sections/BannerSection";
import CompaniesSection from "./sections/CompaniesSection";
import ContactSection from "./sections/ContactSection";
import FaqSection from "./sections/FaqSection";
import Footer from "./sections/Footer";
import HomeSection from "./sections/Home";
import JoinusSection from "./sections/JoinusSection";
import PlatformOverview from "./sections/PlatformOverview";
import PricingSection from "./sections/PricingSection";
import ProductivitySection from "./sections/ProductivitySection";
import Reminderbanner from "./sections/Reminderbanner";
import SlideShow from "./sections/SlideShow";
import SupportSection from "./sections/SupportSection";

export default function Home() {
  return (
    <>
    <div className="">
    <Header />
    <HomeSection />
    <CompaniesSection />
    <AboutPage />
    <PlatformOverview />
    <JoinusSection />
    <SupportSection />
    <BannerSection />
    <ProductivitySection />
    <Reminderbanner />
    <SlideShow />
    <PricingSection />
    <FaqSection />
    <ContactSection />
    <Footer />
    </div>
    </>
  );
}