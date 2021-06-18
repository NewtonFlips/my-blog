import AllBlogs from "../../components/blogs/AllBlogs";
import { getAllPosts } from "../../utils/loadData";

const Blogs = (props) => {
  return (
    <>
      <AllBlogs data={props.data} />
    </>
  );
};

export default Blogs;

export function getStaticProps() {
  const data = getAllPosts();
  return {
    props: { data },
  };
}
