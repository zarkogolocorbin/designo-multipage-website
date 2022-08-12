import Buttons from "../components/Buttons";
import Features from "../components/Features";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";

import data from "../data.json";

export default function HomePage({ category }) {
  return (
    <div>
      <Layout>
        <Showcase />
        <Buttons category={category} />
        <Features />
      </Layout>
    </div>
  );
}

export function getServerSideProps() {
  const category = data;
  return {
    props: {
      category,
    },
  };
}
