import Head from "next/head";
import classes from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="My blog is a place where you can find high quality content on fields of security, technology, web development, finance, accounting, audit and many other topics around you."
        />
      </Head>
      <Header />
      <main className={classes.layout}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
