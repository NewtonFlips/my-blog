import fs from "fs/promises";
import path from "path";
import Header from "../../components/header/Header";
import Layout from "../../components/ui/Layout";
import SingleBlog from "../../components/blogs/SingleBlog";
import Footer from "../../components/footer/Footer";

const Blog = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <SingleBlog data={props.data} />
      </Layout>
      <Footer />
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const { params } = context;
  const rawData = await fs.readFile(
    path.join(process.cwd(), "DUMMY_BACKEND.json"),
    "utf-8"
  );
  const blogs = JSON.parse(rawData);

  const singleBlog = blogs.find((blog) => blog.id === params.blogId);

  return {
    props: {
      data: singleBlog,
    },
  };
}

export async function getStaticPaths(context) {
  const rawData = await fs.readFile(
    path.join(process.cwd(), "DUMMY_BACKEND.json"),
    "utf-8"
  );
  const data = JSON.parse(rawData);

  const blogObjects = data.map((blog) => {
    return { params: { blogId: blog.id } };
  });

  return {
    paths: blogObjects,
    fallback: false,
  };
}
