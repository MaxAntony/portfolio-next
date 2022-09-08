import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';


export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='es-PE'>
        <Head>
          {/*Google fonts: Poppins*/}
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
