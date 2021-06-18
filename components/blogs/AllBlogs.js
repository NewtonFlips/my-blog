import classes from "./AllBlogs.module.css";
import Link from "next/link";

const AllBlogs = (props) => {
  return (
    <>
      <h2 className={classes.featuredHeading}>All Blogs!</h2>
      <ul className={classes.featured}>
        {props.data.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.shortDescription}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default AllBlogs;
