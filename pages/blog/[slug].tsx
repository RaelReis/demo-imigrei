import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";

import Header from "../../components/Header";
import { GetStaticPaths } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface PostProps {
  data: string;
}

interface Post {
  title: string;
  description: string;
  date: Date;
  thumbnail: string;
  type: string;
  tags: { name: string }[];
  content: string;
}

export default function Post({ data }: PostProps) {
  const { title, description, date, thumbnail, type, tags, content } = JSON.parse(data) as Post;

  if (!data) {
    return <p>404</p>;
  }

  return (
    <>
      <Header />
      <main className="container">
        <article>
          <ReactMarkdown>{title}</ReactMarkdown>
          <ReactMarkdown>{description}</ReactMarkdown>
          <Image src={thumbnail} alt="" width={752} height={514} />
          <p>{`tipo: ${type}`}</p>
          {tags &&
            tags.map((tag) => (
              <p key={tag.name} className="text-base-blue inline-block mr-2">
                {tag.name}
              </p>
            ))}
          <ReactMarkdown className="markdown">{content}</ReactMarkdown>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [
      {
        params: {
          slug: "teste",
        },
      },
    ],
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps(ctx: any) {
  const { slug } = await ctx.params;

  try {
    const realSlug = await slug.replace(/\.md$/, "");
    const fullPath = join("content/blog/posts", `${realSlug}.md`);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    const serialized = JSON.stringify(data);

    console.log(serialized);

    return {
      props: {
        data: serialized,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
