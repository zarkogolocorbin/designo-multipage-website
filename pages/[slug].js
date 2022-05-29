import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import LinksButtons from "../components/LinksButtons";
import Projects from "../components/Projects";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function CategoryPage({ currentCategory, allCategories }) {
  const objCategory = JSON.parse(currentCategory);
  const objCategories = JSON.parse(allCategories);
  return (
    <Layout title={`Designo | ${objCategory.name}`}>
      <Jumbotron title={objCategory.name} text={objCategory.text} />
      <Projects projects={objCategory.projects} />
      <LinksButtons allCategories={objCategories} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const categories = await prisma.category.findMany();

  const category = await prisma.category.findFirst({
    where: {
      slug: slug,
    },
    include: { projects: true },
  });

  const currentCategory = JSON.stringify(category);
  const allCategories = JSON.stringify(categories);
  return {
    props: {
      currentCategory,
      allCategories,
    },
  };
}
