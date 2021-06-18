import fs from "fs/promises";
import path from "path";
import Header from "../../components/header/Header";
import Layout from "../../components/ui/Layout";
import SingleBlog from "../../components/blogs/SingleBlog";
import Footer from "../../components/footer/Footer";

const Blog = (props) => {
  if (!props.data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SingleBlog data={props.data} />
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

  // This is also usefule and was added later on
  if (!singleBlog) {
    return {
      notFound: true,
    };
  }

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
    fallback: true, // if it is set to true, this would mean that for pages which are not listed but could be found should be rendered on the fly,
  };
}
