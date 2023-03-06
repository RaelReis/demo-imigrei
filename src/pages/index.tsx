import { useRef, useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import { client } from "../lib/apollo";
import { GET_FIRST_FOUR_POSTS_ORDERED_BY_LIKES_QUERY } from "../lib/querys";

import Carousel from "../components/Carousel";
import BlogCard from "../components/BlogCard";

import { Post } from "../interfaces";

interface HomeProps {
  blogData: Post[];
}

const SERVICES_DATA = [
  {
    title: "Cidadania Portuguesa",
    description:
      "Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em Portugal e Itália!",
    link: "#",
    imagePath: "/assets/card-one-bg.png",
  },
  {
    title: "Cidadania Italiana",
    description:
      "Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em Portugal e Itália!",
    link: "#",
    imagePath: "/assets/card-two-bg.png",
  },
  {
    title: "Vistos Portugal",
    description:
      "Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em Portugal e Itália!",
    link: "#",
    imagePath: "/assets/card-three-bg.png",
  },
];

export default function Home({ blogData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Página de demonstração da imigrei" />
      </Head>
      <main className="w-full min-h-screen py-0">
        <section className="text-center lg:text-start items-center bg-base-green-light header-padding">
          <div className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-11">
            <div className="py-8 lg:py-16 flex flex-col ">
              <img className="mx-auto lg:ml-0" src="/assets/flags-img.png" alt="" />
              <h1 className="mt-4 text-[1.75rem] sm:text-5xl font-medium text-base-title">
                Assessoria de imigração para Portugal e Itália
              </h1>
              <p className="mx-auto lg:ml-0 mt-3 text-sm sm:text-xl text-base-text max-w-md">
                Conquiste sua cidadania sem se preocupar com burocracias. Economize tempo e dinheiro com com a Imigrei!
              </p>
              <Link href="#" className="text-sm lg:text-base button-fill self-center lg:self-start mt-11">
                Conhecer Serviços
              </Link>
            </div>
            <img className="self-end mx-auto" src="/assets/hero-img.png" alt="Hero image" />
          </div>
        </section>
        <section className="text-center lg:text-start container grid grid-cols-1 lg:grid-cols-2 items-center gap-24 mt-12 lg:my-16 linear-white-gradient">
          <img
            className="order-2 lg:order-1 mx-auto"
            src="/assets/quem-somos-img.png"
            alt="Duas pessoas sorrindo enquanto usam em um laptop"
          />
          <div className="order-1 lg:order-2 flex flex-col">
            <span className="text-xs sm:text-base text-base-label font-medium">Quem Somos</span>
            <h2 className="mt-2 text-2xl sm:text-4xl text-base-title font-medium text-">Prazer, somos a Imigrei!</h2>
            <p className="text-sm sm:text-base mt-4 text-base-text">
              Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em Portugal e
              Itália! Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em
              Portugal e Itália!
            </p>
            <Link href="#" className="text-sm sm:text-base button-fill self-center lg:self-start mt-7">
              Solicitar Atendimento
            </Link>
          </div>
        </section>
        <section className="text-center mt-12 lg:mt-28">
          <div className="container">
            <span className="text-base-label font-medium">Serviços</span>
            <h2 className="text-base-title text text-2xl sm:text-4xl">Conheça as nossas áreas de atuação</h2>
            <p className="mt-2 mx-auto text-base-text max-w-xl">
              Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em Portugal e
              Itália!
            </p>
          </div>

          <section className="mt-6 py-8 linear-green-gradient overflow-hidden">
            <Carousel
              listData={SERVICES_DATA}
              render={(service: typeof SERVICES_DATA[0]) => (
                <li
                  key={service.title}
                  className="flex flex-col shadow-2xl min-w-[256px] sm:min-w-[348px] sm:min-h-max text-start"
                >
                  <div>
                    <img className="w-full" src={service.imagePath} alt="" />
                  </div>
                  <div className="bg-white p-6 lg:p-8">
                    <h3 className="text-base sm:text-xl font-medium">{service.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-base-text">{service.description}</p>
                    <Link href={service.link} className="link mt-4 lg:mt-11">
                      Saber Mais
                    </Link>
                  </div>
                </li>
              )}
            />
          </section>
        </section>
        <section className="container my-10 lg:my-20 py-14 text-center text-base-title bg-newsletter bg-cover">
          <span className="text-sm lg:text-base text-base-label font-medium">Newsletter</span>
          <h2 className="text-2xl lg:text-4xl font-medium">Fique por dentro das nossas atualizações!</h2>
          <p className="text-sm lg:text-base text-base-text">
            Saiba o que acontece no mundo da imigrações e cidadania em Portugal e Itália.
          </p>
          <form className="flex flex-wrap items-center justify-center gap-4 mt-8 max-w-md mx-auto">
            <input
              className="input flex-grow lg:flex-initial w-64"
              type="text"
              placeholder="Digite o seu melhor E-mail"
            />
            <button className="button-fill w-full lg:w-fit text-sm lg:text-base">Cadastrar</button>
          </form>
        </section>
        <section className="my-10 lg:my-28">
          <div className="container flex flex-col">
            <div className="text-center lg:text-start flex items-center">
              <div className="max-w-3xl mx-auto lg:ml-0">
                <span className="text-sm lg:text-base text-base-green font-medium">Blog</span>
                <h2 className="text-2xl lg:text-4xl text-base-title">Conteúdo de qualidade para imigrantes</h2>
                <p className="text-sm lg:text-base mt-3 text-base-text">
                  Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em
                  Portugal e Itália!
                </p>
              </div>
              <Link href="#" className="hidden lg:block button ml-auto">
                Ver Blog
              </Link>
            </div>

            <Carousel listData={blogData} render={(data: Post) => <BlogCard key={data.slug} {...data} />} />

            <Link href="#" className="lg:hidden button mx-auto">
              Ver Blog
            </Link>
          </div>
        </section>
        <section className="my-10 lg:my-24 container lg:px-16 bg-base-green-light grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:max-w-md py-16 text-center lg:text-start">
            <span className="text-sm lg:text-base text-base-text font-medium">Contato</span>
            <h2 className="mt-1 text-base-title text-2xl lg:text-4xl font-medium">Fale com a Imigrei</h2>
            <p className="text-sm lg:text-base mt-2 text-base-title">
              Preencha o formulário com os seus melhores contatos que retornaremos o mais breve possível!
            </p>
            <form action="" className="mt-9 flex flex-col gap-9">
              <input className="input" type="text" placeholder="Nome*" />
              <div className="flex items-center gap-7 flex-wrap">
                <input className="input flex-grow" type="text" placeholder="Email*" />
                <input className="input flex-grow" type="text" placeholder="Telefone" />
              </div>
              <textarea className="input min-h-[5rem]" placeholder="Mensagem" />
              <button className="mt-8 button-fill text-sm lg:text-base flex items-center justify-center gap-5 group relative">
                <span>Enviar</span>
                <div className="absolute right-32 opacity-0 duration-300 group-hover:opacity-100 group-hover:right-[11rem]">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M-2.50794e-07 6.2375L0.892498 6.2375L2.1675 7.9375L7.50125 7.9375L5.3125 0.499999L6.545 0.5L10.9225 7.9375L15.9375 7.9375C16.235 7.9375 16.4865 8.04021 16.6919 8.24563C16.8973 8.45104 17 8.7025 17 9C17 9.2975 16.8973 9.54896 16.6919 9.75438C16.4865 9.95979 16.235 10.0625 15.9375 10.0625L10.9225 10.0625L6.545 17.5L5.3125 17.5L7.50125 10.0625L2.1675 10.0625L0.892498 11.7625L-4.923e-07 11.7625L0.786249 9L-2.50794e-07 6.2375Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </div>
              </button>
            </form>
          </div>
          <img className="hidden lg:block self-end mx-auto" src="/assets/contact-img.png" alt="" />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query<{ posts: Post[] }>({
    query: GET_FIRST_FOUR_POSTS_ORDERED_BY_LIKES_QUERY,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogData: data.posts },
  };
}
