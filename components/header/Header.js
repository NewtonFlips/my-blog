import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <h1>My Blog</h1>
        </Link>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
