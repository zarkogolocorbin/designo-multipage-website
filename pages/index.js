import Buttons from "../components/Buttons";
import Features from "../components/Features";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function HomePage({ data }) {
  const objData = JSON.parse(data);
  return (
    <div>
      <Layout>
        <Showcase />
        <Buttons />
        <Features />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany({
    include: { projects: true },
  });

  const data = [
    { id: 1, title: "title" },
    { id: 2, title: "title2" },
  ];

  const allCategories = JSON.stringify(categories);

  return {
    props: {
      data: allCategories,
    },
  };
}
