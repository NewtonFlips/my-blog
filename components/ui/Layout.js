import classes from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <main className={classes.layout}>{props.children}</main>
    </>
  );
};

export default Layout;
