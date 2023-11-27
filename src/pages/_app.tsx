import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.svg"
import { Container, Header } from "../styles/page/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} alt="Logo" width="100" height="100" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
