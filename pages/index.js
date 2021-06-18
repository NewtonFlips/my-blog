import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import Layout from "../components/ui/Layout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="My blog is a place where you can find high quality content on fields of security, technology, web development, finance, accounting, audit and many other topics around you."
        />
      </Head>
      <Header />
      <Layout>
        <FeaturedBlogs data={props.data} />
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const rawData = await fs.readFile(
    path.join(process.cwd(), "DUMMY_BACKEND.json"),
    "utf-8"
  );
  const data = JSON.parse(rawData);
  return {
    props: { data },
  };
}
