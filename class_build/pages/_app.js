import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_KAKAO_KEY);
  return <Component {...pageProps} />;
}

export default MyApp;
