import SingleBlog from "../../components/blogs/SingleBlog";
import { getPostData, getPostFiles } from "../../utils/loadData";

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

export function getStaticProps(context) {
  const { params } = context;
  const { blogId } = params;

  const singleBlog = getPostData(blogId);

  // const singleBlog = blogs.find((blog) => blog.id === params.blogId);

  // This is also usefule and was added later on
  // if (!singleBlog) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data: singleBlog,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(context) {
  const data = getPostFiles();

  const blogObjects = data.map((blog) => {
    return blog.replace(/\.md$/, "");
  });

  return {
    paths: blogObjects.map((slug) => ({ params: { blogId: slug } })),
    fallback: false, // if it is set to true, this would mean that for pages which are not listed but could be found should be rendered on the fly,
  };
}
