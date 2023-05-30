import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from 'next/document';

  export default function MyDocument() {
    return (
      <Html lang="en">
        <Head />
        <body data-kontent-project-id={process.env.NEXT_PUBLIC_KONTENT_PROJECT_ID} data-kontent-language-codename={process.env.NEXT_PUBLIC_DEFAULT_LANG}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }