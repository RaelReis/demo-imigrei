import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "../../lib/apollo";
import { GET_FIRST_FOUR_POSTS_ORDERED_BY_LIKES_QUERY } from "../../lib/querys";
import { cardFormatDate } from "../../utils/formatDate";

interface Post {
  title: string;
  description: string;
  category: string;
  slug: string;
  thumbnail: { url: string };
  publishedAt: string;
}

interface BlogProps {
  data: Post[];
}

export default function Blog({ data }: BlogProps) {
  const newData = [...data];

  const firstPost = newData.shift() as Post;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main className="">
        <section className="text-center flex flex-col gap-x-1 items-center header-padding bg-base-green-light">
          <div className="container">
            <div className="flex-grow">
              <img className="mx-auto" src="/assets/flags-img.png" alt="Bandeiras da Itália e do Portugal" />
              <h1 className="text-base-green text-[1.75rem]">Blog Imigrei</h1>
              <p className="mt-5 text-sm text-base-green">
                Dicas e conteúdo de qualidade criado por quem te deseja a melhor experiência de imigração para a Itália
                e Portugal!
              </p>
            </div>
            <Image
              className="mx-auto"
              src="/assets/blog-hero-img.png"
              alt="Imagem de uma mulher segurando um globo e apontando para ele"
              width={354}
              height={298}
            />
          </div>
        </section>
        <section className="container mt-10">
          <h2 className="text-2xl text-center mb-6">Mais Lidos</h2>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-full h-[260px]">
                <img className="w-full h-full object-cover" src={firstPost.thumbnail.url} alt="" />
              </div>
              <div className="flex flex-col py-7">
                <div className="flex gap-3">
                  <span className="text-base-text">{firstPost.publishedAt}</span>
                  <span className="text-base-title capitalize">{firstPost.category}</span>
                </div>
                <h3 className="font-medium text-base">{firstPost.title}</h3>
                <Link href={`/blog/post/${firstPost.slug}`} className="link">
                  Ler este post
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<{ posts: Post[] }>({
    query: GET_FIRST_FOUR_POSTS_ORDERED_BY_LIKES_QUERY,
  });

  // Formatting date in posts
  const formatedPosts = data.posts.map((post: Post) => {
    return { ...post, publishedAt: cardFormatDate(post.publishedAt) };
  });

  return {
    props: {
      data: formatedPosts,
    },
  };
};
7;
