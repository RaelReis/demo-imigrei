import Head from "next/head";
import { attributes, react as PostContent } from "../content/blog/posts/teste-final-em.md";

interface Post {
  title: string;
  description: string;
  date: Date;
  thumbnail: string;
  type: { name: string }[];
  content: string;
}

export default function Teste() {
  const { title, description, date, thumbnail, type, content } = attributes as Post;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={thumbnail} alt="" />
        <p>{`tipo: ${type}`}</p>
        <PostContent />
      </article>
    </>
  );
}
