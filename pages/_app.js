import "../styles/globals.css";
import { extendTheme, ChakraProvider, CSSReset} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
