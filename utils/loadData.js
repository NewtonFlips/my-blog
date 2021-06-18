import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsPath);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const allBlogs = getPostFiles();

  const allPosts = allBlogs.map((blog) => {
    return getPostData(blog);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allBlogs = getAllPosts();

  const featuredPosts = allBlogs.filter((blog) => blog.isFeatured);

  return featuredPosts;
}
