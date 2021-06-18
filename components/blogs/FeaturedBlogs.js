import classes from "./FeaturedBlogs.module.css";
import Link from "next/link";

const FeaturedBlogs = (props) => {
  return (
    <>
      <h2 className={classes.featuredHeading}>Top picks for today!</h2>
      <ul className={classes.featured}>
        {props.data.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <li>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default FeaturedBlogs;
