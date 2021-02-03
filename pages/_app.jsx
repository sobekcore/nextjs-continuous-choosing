import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Next.js Continuous Choosing</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name="description" content="Simple app to ask you a few questsions about your tea and telling you how to
        brew it. Questions and anwsers depends on your choices."/>
        <meta name="keywords" content="tea, tea colors, green tea, white tea, brewing tea, how to brew tea"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
