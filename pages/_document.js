/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link rel="shortcut icon" href={`${publicRuntimeConfig.base}/favicon-pkbkulit.ico`} />
            {/* <link rel="stylesheet" href={`${publicRuntimeConfig.base}/css/bootstrap.min.css`} /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
            <link rel="stylesheet" href={`${publicRuntimeConfig.base}/css/magnific-popup.css`} />
            <link rel="stylesheet" href={`${publicRuntimeConfig.base}/css/mystyle.css`} />
          </Head>
  
          <body>
            <Main />
            <NextScript />
            <script src={`${publicRuntimeConfig.base}/js/jquery.minv2.js`}></script>
            <script src={`${publicRuntimeConfig.base}/js/popper.min.js`}></script>
            <script src={`${publicRuntimeConfig.base}/js/bootstrap.min.js`}></script>
            <script src={`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`}></script>
            <script src={`${publicRuntimeConfig.base}/js/main.js`}></script>
  
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;