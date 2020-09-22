import type { AppProps } from "next/app";

import "@app/css/font.css";
import "@app/css/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
