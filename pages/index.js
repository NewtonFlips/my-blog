import FeaturedBlogs from "../components/blogs/FeaturedBlogs";
import { getFeaturedPosts } from "../utils/loadData";

export default function Home(props) {
  return (
    <>
      {/* <Header />
      <Layout> */}
      <FeaturedBlogs data={props.posts} />
      {/* </Layout>
      <Footer /> */}
    </>
  );
}

export function getStaticProps() {
  const data = getFeaturedPosts();
  console.log(data);
  return {
    props: { posts: data },
  };
}
