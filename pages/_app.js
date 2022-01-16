import "../styles/globals.css";
import Head from "next/head";
// import NextNProgress from "nextjs-progressbar";
// import { PageTransition } from "next-page-transitions";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Page Needs ================================================== */}
        <meta charSet="utf-8" />
        {/* Mobile Specific Metas ================================================== */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
      </Head>
      {/* <Component {...pageProps} base={`https://cdn.fkuwks.com/`} /> */}
      {/* <NextNProgress
        color="#FFBD33"
        startPosition={0.08}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      /> */}
      {/* <PageTransition timeout={300} classNames="page-transition"> */}
        <Component {...pageProps} base={publicRuntimeConfig.base} />
      {/* </PageTransition> */}
      {/* <style jsx global>{`
        .page-transition-exit {
          opacity: 0.8;
        }
        .page-transition-exit-active {
          opacity: 0.3;
          transition: opacity 300ms;
        }
        .page-transition-enter {
          opacity: 0.3;
        }
        .page-transition-enter-active {
          opacity: 0.8;
          transition: opacity 100ms;
        }
      `}</style> */}
    </>
  );
}

export default MyApp;
