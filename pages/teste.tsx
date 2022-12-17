import Head from "next/head";
import { attributes, react as HomeContent } from "../content/home.md";

interface Attributes {
  title: string;
  date: Date;
  cats: Cat[];
}

interface Cat {
  name: string;
  description: string;
}

export default function Teste() {
  let { title, cats } = attributes as Attributes;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
