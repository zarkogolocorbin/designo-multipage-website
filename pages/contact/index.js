import Layout from "../../components/Layout";
import Locations from "../../components/Locations";
import ShowcaseContact from "../../components/contact/Showcase";
import FooterContact from "../../components/contact/Footer";

export default function ContactPage() {
  return (
    <>
      <Layout title={"Designo | Contact Page"}>
        <ShowcaseContact />
        <Locations />
      </Layout>
      <FooterContact />
    </>
  );
}
