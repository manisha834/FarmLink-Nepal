import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FeaturedFarmers from "../components/home/FeaturedFarmers";
import Footer from "../components/common/Footer";
import Categories from "../components/home/Categories";

function Home() {
  return (
    <>
      <MainLayout>
      <Hero />
      <Categories />
      <Features />
      <Stats />
      <HowItWorks />
      <FeaturedProducts />
      <FeaturedFarmers />
      </MainLayout>
    </>
  );
}

export default Home;