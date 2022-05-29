import Layout from "../../components/Layout";
import AboutShowcase from "../../components/about/Showcase";
import DealSection from "../../components/about/Deal";
import Locations from "../../components/Locations";

export default function AboutPage() {
  return (
    <Layout title={"Designo | About Page"}>
      <AboutShowcase />
      <Locations />
      <DealSection />
    </Layout>
  );
}

// image: "image-real-deal.jpg"
