import type { AppProps } from "next/app";

import "@app/styles/font.css";
import "@app/styles/main.css";
import { ThemeProvider, theme } from "@app/styles/styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
