import { init } from "@socialgouv/matomo-next";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/prism.css";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  });

  return (
    <>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
