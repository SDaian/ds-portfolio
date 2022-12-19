import fs from 'fs';
import path from 'path';
import ReactMardown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext } from 'next';

type BlogPostProps = {
  post: { content: string; data: { title: string; date: string } };
};

const BlogPost = ({ post }: BlogPostProps) => {
  const { title, date } = post.data;
  const router = useRouter();
  return (
    <>
      <span>{title} - {date}</span>
      <ReactMardown>{post.content}</ReactMardown>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = matter(fileContent);

  return {
    props: {
      post: {
        ...data,
        content: data.content,
        orig: data.orig.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
