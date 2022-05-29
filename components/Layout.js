import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Cta from "./Cta";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

export default function Layout({ children, title, keywords, description }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon-32x32.ico" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: "0.9" }}
      >
        {children}
        {router.pathname !== "/contact" && <Cta />}
      </motion.main>
      {router.pathname !== "/contact" && <Footer />}
    </div>
  );
}

Layout.defaultProps = {
  title: "Designo | Home Page",
  keywords: "development, coding, programming, design",
  description:
    "The best info and news in app design, graphic design, web design",
};
