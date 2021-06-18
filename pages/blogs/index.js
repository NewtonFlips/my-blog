import fs from "fs/promises";
import path from "path";
import Header from "./../../components/header/Header";
import Layout from "../../components/ui/Layout";
import Footer from "../../components/footer/Footer";
import AllBlogs from "../../components/blogs/AllBlogs";

const Blogs = (props) => {
  return (
    <>
      <AllBlogs data={props.data} />
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
    revalidate: 600,
  };
}
