import Buttons from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { useRouter } from "next/router";

import data from "../data.json";

export default function CategoryPage({ category, categories }) {
  const router = useRouter();
  const currentCategory = categories.filter(
    (category) => category.slug !== router.query.slug
  );
  return (
    <Layout title={`Designo | ${category.categoryTitle}`}>
      <Jumbotron title={category.categoryTitle} text={category.categoryText} />
      <Projects projects={category.projects} />
      <Buttons category={currentCategory} />
    </Layout>
  );
}

export function getServerSideProps({ query }) {
  const categories = data;
  const category = data.find((category) => category.slug === query.slug);
  return {
    props: {
      categories,
      category,
    },
  };
}
