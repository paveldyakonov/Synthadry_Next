import "../styles/global.scss";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={6} color="#9932cc" />
      <Component {...pageProps} />
    </>
  );
}
