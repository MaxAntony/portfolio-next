import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';


export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Max Antony" />
          <meta name="description" content="Pagina personal de Max Antony" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" type="image/jpg" sizes="192x192" href="/icons/manifest-icon-192.jpg" />
          <link rel="icon" type="image/jpg" sizes="512x512" href="/icons/manifest-icon-512.jpg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Max Antony" />
          <meta property="og:description" content="Pagina personal de Max Antony" />
          <meta property="og:site_name" content="Max Antony" />
          <meta property="og:url" content="https://maxantony.com" />
          <meta property="og:image" content="https://maxantony.com/icons/manifest-icon-512.jpg" />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
