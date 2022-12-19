import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Props = {
  posts: [{ title: string; slug: string }];
};

const Blog = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Blog;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    console.log(data);

    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });

  return {
    props: {
      posts,
    }
  };
}
