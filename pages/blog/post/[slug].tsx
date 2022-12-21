import Image from "next/image";
import Head from "next/head";
import { GetStaticPropsContext } from "next";

import { client } from "../../../lib/apollo";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import parse from "html-react-parser";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogList from "../../../components/BlogList";

import { GET_POSTS_BY_CATEGORY_ORDENED_QUERY, GET_POST_BY_SLUG_QUERY } from "../../../lib/querys";

type Thumbnail = {
  id: string;
  url: string;
};

interface PostProps {
  post: Post;
  relatedPosts: Post[];
}

interface Post {
  author: string;
  title: string;
  description: string;
  category: "portugal" | "italia" | "dicas_imigrei";
  tags: string[];
  content: {
    markdown: string;
    html: string;
  };
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  thumbnail: Thumbnail;
  thumbnailDescription: string;
}

export default function Post({ post, relatedPosts }: PostProps) {
  const { author, title, description, category, content, tags, createdAt, updatedAt, thumbnail, thumbnailDescription } =
    post;

  const formatedCreatedAt = format(new Date(createdAt), `'em' dd MMM 'de' yyyy`, {
    locale: ptBR,
  })
    .split(" ")
    .map((word, index) => (index === 2 ? word.toUpperCase() : word))
    .join(" ");

  const formatedUpdatedAt = format(new Date(updatedAt), "'em' dd MMM 'de' yyyy", {
    locale: ptBR,
  })
    .split(" ")
    .map((word, index) => (index === 2 ? word.toUpperCase() : word))
    .join(" ");

  // Replace function to convert html img to next img (in html parse function)
  const replaceImage = {
    replace: ({ name, attribs }: any) => {
      if (name === "img") {
        return (
          <Image
            src={attribs.src}
            width={attribs.width}
            height={attribs.height}
            alt={attribs.alt ? attribs.alt : "Image - essa imagem não tem um texto alt"}
          />
        );
      }
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="container">
        <article className="max-w-[750px] my-14">
          <h1 className="font-medium text-2xl lg:text-4xl text-base-title">{title}</h1>
          <p className="mt-6 mb-16 text-xl text-base-text">{description}</p>
          {tags && (
            <ul className="flex gap-3 text-base-text flex-wrap">
              {tags.map((tag) => (
                <li className="py-[2px] px-6 rounded-sm bg-base-blog-tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="text-xs md:text-sm lg:text-base flex gap-2 sm:gap-8 mt-5 flex-wrap">
            <span className="text-base-title">
              Criado <span className="text-base-text">{formatedCreatedAt}</span>
            </span>
            <span className="text-base-title">
              Atualizado <span className="text-base-text">{formatedUpdatedAt}</span>
            </span>
            <span className="text-base-title">
              Escritro <span className="text-base-text">por {author}</span>
            </span>
          </div>

          <Image className="mt-16 mb-3 w-full h-full" src={thumbnail.url} alt="" width={752} height={414} priority />

          {thumbnailDescription && (
            <small className="inline-block text-base-text text-base mb-3">{thumbnailDescription}</small>
          )}

          <div className="post-content">{parse(content.html, { replace: replaceImage.replace })}</div>
        </article>

        <div className="flex flex-col text-center px-12 lg:text-left lg:px-0 relative">
          <span className="text-xs lg:text-base text-base-green font-medium">Relacionados</span>
          <h2 className="font-medium text-base-title text-2xl lg:text-4xl mt-3">Leia Tambem</h2>
          <p className="text-base-text text-sm lg:text-base mt-3">
            Veja alguns dos posts do nosso blog que estão relacionados com o processo de cidadania italiana.
          </p>
          <button className="hidden lg:block button absolute right-0">Ver Todos</button>
        </div>
      </main>

      <BlogList data={relatedPosts} />

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params as { slug: string };

  const postResponse = await client.query<{ post: Post }>({
    query: GET_POST_BY_SLUG_QUERY,
    variables: {
      slug,
    },
  });

  const relatedPostsData = await client.query<{ posts: Post[] }>({
    query: GET_POSTS_BY_CATEGORY_ORDENED_QUERY,
    variables: {
      category: postResponse.data.post.category,
    },
  });

  if (!postResponse.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postResponse.data.post,
      relatedPosts: relatedPostsData.data.posts,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
}
