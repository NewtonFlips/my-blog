import classes from "./SingleBlog.module.css";

const SingleBlog = (props) => {
  const description = props.data.blogDetail.split("\n");
  //   console.log(description);
  return (
    <>
      <h2 className={classes.blogHeading}>{props.data.title}</h2>
      {description.map((para, i) => (
        <p className={classes.blogDesc} key={i}>
          {para}
        </p>
      ))}
    </>
  );
};

export default SingleBlog;
