import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { MagazineProvider } from "../context/MagazineContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <MagazineProvider>
        <Component {...pageProps} />
      </MagazineProvider>
    </MoralisProvider>
  );
}

export default MyApp;
