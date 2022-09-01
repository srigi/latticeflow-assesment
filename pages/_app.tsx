import Head from "next/head";

import { AppProps } from "src/types";
import "src/global.css";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

export default function App({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    function getLayout(title) {
      return title();
    };

  return getLayout((title) => {
    const htmlTitle =
      title == null ? WEBSITE_NAME : `${title} · ${WEBSITE_NAME}`;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>{htmlTitle}</title>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }, pageProps);
}
