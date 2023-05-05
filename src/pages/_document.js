import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
        <meta name="discrption" content="parallax one page" />
        <meta name="keyword"
          content="agency, business, corporate, creative, freelancer, interior, joomla template, K2 Blog, minimal, modern, multipurpose, personal, portfolio, responsive, simple" />
        <link rel="shortcut icon" href='assets/img/favicon.icon' type="image/x-icon" />
        <link rel="icon" href='assets/img/favicon.ico" type="image/x-icon' />
        <link href="assets/css/plugins.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body className="hamburger-menu dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">

        <Main />
        <NextScript />
        {/* Custom JS files */}
        <Script src="js/jquery-3.1.1.min.js"></Script>
        <Script src="js/plugins.js"></Script>
        <Script src="js/dsn-grid.js"></Script>
        <Script src="js/custom.js"></Script>
        <Script src="js/custom.min.js"></Script>
      </body>
    </Html>
  )
}
