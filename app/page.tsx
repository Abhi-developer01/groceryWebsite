import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import ScreenshotsSection from "./components/ScreenshotsSection";
import WhyUsSection from "./components/WhyUsSection";
import ContactSection from "./components/ContactSection";
import PoliciesSection from "./components/PoliciesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white">
              <img
                src={"/images/logo.png"}
                alt={`App logo`}
                className="h-84 w-full "
              />
            </div>
            <div>
              <div >
                 <img
                src={"/images/name.png"}
                alt={`App logo`}
                className="h-6 w-auto "
              />
              </div>
              <p className="hidden text-xs text-slate-500 sm:block">
                Groceries delivered fast to your doorstep.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-emerald-700">
              About
            </a>
            <a href="#categories" className="hover:text-emerald-700">
              Categories
            </a>
            <a href="#products" className="hover:text-emerald-700">
              Products
            </a>
            <a href="#screenshots" className="hover:text-emerald-700">
              Screenshots
            </a>
            <a href="#contact" className="hover:text-emerald-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <AboutSection />
        <CategoriesSection />
        <ProductsSection />
        <ScreenshotsSection />
        <WhyUsSection />
        <ContactSection />
        <PoliciesSection />
      </main>

      <Footer />
    </div>
  );
}
