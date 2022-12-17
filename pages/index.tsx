import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion, MotionProps } from "framer-motion";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRef, useEffect, useState } from "react";

interface Constraints {
  left: number;
  right: number;
}

const Home: NextPage = () => {
  const carouselOneRef = useRef<HTMLUListElement>(null);
  const carouselTwoRef = useRef<HTMLUListElement>(null);

  const [carouselOneWidth, setCarouselOneWidth] = useState(0);
  const [carouselTwoWidth, setCarouselTwoWidth] = useState(0);

  const [carouselOneConstraints, setCarouselOneConstraints] = useState<Constraints>({ right: 0, left: 0 });
  const [carouselTwoConstraints, setCarouselTwoConstraints] = useState<Constraints>({ right: 0, left: 0 });

  const [isDragable, setIsDrabable] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1210) {
      setIsDrabable(true);
      setCarouselOneWidth(carouselOneRef.current?.scrollWidth! - carouselOneRef.current?.offsetWidth!);
      setCarouselTwoWidth(carouselTwoRef.current?.scrollWidth! - carouselTwoRef.current?.offsetWidth!);
    } else {
      setIsDrabable(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCarouselOneConstraints({ right: 0, left: -carouselOneWidth });
    setCarouselTwoConstraints({ right: 0, left: -carouselTwoWidth });
  }, [carouselOneWidth, carouselTwoWidth]);

  function handleResize() {
    if (window.innerWidth <= 1210) {
      setIsDrabable(true);
      setCarouselOneWidth(carouselOneRef.current?.scrollWidth! - carouselOneRef.current?.offsetWidth!);
      setCarouselTwoWidth(carouselTwoRef.current?.scrollWidth! - carouselTwoRef.current?.offsetWidth!);
    } else {
      setIsDrabable(false);
    }
  }

  const teste: MotionProps = isDragable
    ? { drag: "x", dragConstraints: { right: 0, left: -carouselOneWidth } }
    : { drag: false };

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full min-h-screen py-0">
        <section className="text-center lg:text-start items-center bg-base-green-light">
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
            <motion.div
              className="container h-full cursor-grab"
              whileTap={{ cursor: "grabbing" }}
              key={carouselOneWidth}
            >
              <motion.ul className="flex items-center gap-8 text-start" {...teste} ref={carouselOneRef}>
                <li className="flex flex-col shadow-2xl min-w-[256px] sm:min-w-[348px] sm:min-h-max">
                  <div>
                    <img className="w-full" src="/assets/card-one-bg.png" alt="" />
                  </div>
                  <div className="bg-white p-6 lg:p-8">
                    <h3 className="text-base sm:text-xl font-medium">Cidadania Portuguesa</h3>
                    <p className="mt-2 text-sm sm:text-base text-base-text">
                      Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em
                      Portugal e Itália!
                    </p>
                    <Link
                      href="#"
                      className="text-sm lg:text-base inline-block text-base-green underline mt-4 lg:mt-11"
                    >
                      Saber Mais
                    </Link>
                  </div>
                </li>
                <li className="flex flex-col shadow-2xl min-w-[256px] sm:min-w-[348px] sm:min-h-max">
                  <div>
                    <img className="w-full" src="/assets/card-two-bg.png" alt="" />
                  </div>
                  <div className="bg-white p-6 lg:p-8">
                    <h3 className="text-base sm:text-xl font-medium">Cidadania Italiana</h3>
                    <p className="mt-2 text-sm sm:text-base text-base-text">
                      Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em
                      Portugal e Itália!
                    </p>
                    <Link
                      href="#"
                      className="text-sm lg:text-base inline-block text-base-green underline mt-4 lg:mt-11"
                    >
                      Saber Mais
                    </Link>
                  </div>
                </li>
                <li className="flex flex-col shadow-2xl min-w-[256px] sm:min-w-[348px] sm:min-h-max">
                  <div>
                    <img className="w-full" src="/assets/card-three-bg.png" alt="" />
                  </div>
                  <div className="bg-white p-6 lg:p-8">
                    <h3 className="text-base sm:text-xl font-medium">Vistos Portugal</h3>
                    <p className="mt-2 text-sm sm:text-base text-base-text">
                      Oferecemos uma variedade de serviços para os nossos assessorados que buscam o sonho de viver em
                      Portugal e Itália!
                    </p>
                    <Link
                      href="#"
                      className="text-sm lg:text-base inline-block text-base-green underline mt-4 lg:mt-11"
                    >
                      Saber Mais
                    </Link>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
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
              className="flex-grow lg:flex-initial py-3 px-1 border-b border-base-green w-64 bg-transparent"
              type="text"
              placeholder="Digite o seu melhor E-mail"
            />
            <button className="button-fill w-full lg:w-fit text-sm lg:text-base">Cadastrar</button>
          </form>
        </section>
        <section className="my-10 lg:my-28 overflow-hidden">
          <div className="container flex flex-col">
            <div className="text-center lg:text-start container flex items-center">
              <div className="max-w-3xl mx-auto">
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

            <motion.ul
              className="my-14 flex gap-8"
              drag={"x"}
              dragConstraints={{ right: 0, left: -carouselTwoWidth }}
              ref={carouselTwoRef}
            >
              <li className="min-w-[220px] lg:min-w-[262px] flex flex-col gap-3">
                <div>
                  <img src="/assets/blog-card-one.png" alt="" />
                </div>
                <h3 className="text-xl font-medium text-base-title">Cidadania Portuguesa</h3>
                <p className="text-base-text">
                  Oferecemos uma variedade de serviços para os nossos assessorados que buscam...
                </p>
                <Link href="#" className="text-base-green underline">
                  Ler este Post
                </Link>
              </li>
              <li className="min-w-[220px] lg:min-w-[262px] flex flex-col gap-3">
                <div>
                  <img src="/assets/blog-card-two.png" alt="" />
                </div>
                <h3 className="text-xl font-medium text-base-title">Cidadania Portuguesa</h3>
                <p className="text-base-text">
                  Oferecemos uma variedade de serviços para os nossos assessorados que buscam...
                </p>
                <Link href="#" className="text-base-green underline">
                  Ler este Post
                </Link>
              </li>
              <li className="min-w-[220px] lg:min-w-[262px] flex flex-col gap-3">
                <div>
                  <img src="/assets/blog-card-three.png" alt="" />
                </div>
                <h3 className="text-xl font-medium text-base-title">Cidadania Portuguesa</h3>
                <p className="text-base-text">
                  Oferecemos uma variedade de serviços para os nossos assessorados que buscam...
                </p>
                <Link href="#" className="text-base-green underline">
                  Ler este Post
                </Link>
              </li>
              <li className="min-w-[220px] lg:min-w-[262px] flex flex-col gap-3">
                <div>
                  <img src="/assets/blog-card-four.png" alt="" />
                </div>
                <h3 className="text-xl font-medium text-base-title">Cidadania Portuguesa</h3>
                <p className="text-base-text">
                  Oferecemos uma variedade de serviços para os nossos assessorados que buscam...
                </p>
                <Link href="#" className="text-base-green underline">
                  Ler este Post
                </Link>
              </li>
            </motion.ul>

            <Link href="#" className="lg:hidden button mx-auto">
              Ver Blog
            </Link>
          </div>
        </section>
        <section className="my-10 lg:my-24 container lg:px-16 bg-base-green-light grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:max-w-md py-16 text-center lg:text-start">
            <span className="text-sm lg:text-base text-base-title opacity-50 font-medium">Contato</span>
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
              <button className="mt-8 button-fill text-sm lg:text-base">Enviar</button>
            </form>
          </div>
          <img className="hidden lg:block self-end mx-auto" src="/assets/contact-img.png" alt="" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
