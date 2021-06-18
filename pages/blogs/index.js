import fs from "fs/promises";
import path from "path";
import Header from "./../../components/header/Header";
import Layout from "../../components/ui/Layout";
import Footer from "../../components/footer/Footer";
import AllBlogs from "../../components/blogs/AllBlogs";

const Blogs = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <AllBlogs data={props.data} />
      </Layout>
      <Footer />
    </>
  );
};

export default Blogs;

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
