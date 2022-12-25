import Head from "next/head";
import { useRouter } from "next/router";
import { themes } from "../utils/themes";

export default function Home({ data, username }) {
  const { query } = useRouter();
  const { to, gid, theme } = query;

  const ThemeComponent = themes[theme];

  return username === "demo" ? (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
    >
      <Head>
        <title>{data.meta.title}</title>

        <meta name="description" content={data.meta.description} />
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invitz.me" />
        <meta property="og:description" content={data.meta.description} />
        <meta
          property="og:image"
          content="https://is3.cloudhost.id/invitz-bucket/invitz-logo.png"
        />

        <meta property="twitter:title" content={data.meta.title} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content={data.meta.description} />
        <meta
          property="twitter:image"
          content="https://is3.cloudhost.id/invitz-bucket/invitz-logo.png"
        />
        <meta name="robots" content="noindex" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./css/general.css" />

        <script
          src="https://kit.fontawesome.com/24fd305233.js"
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js"></script>
      </Head>
      <ThemeComponent
        data={data.data}
        username={username}
        to={to}
        gid={gid}
        refetchData={() => window.location.reload()}
      />
    </div>
  ) : (
    <div>Not Found</div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;
  let username = "demo";
  if (host.includes("localhost")) {
    username = "demo";
  } else {
    const splited = host.split(".")[0];
    console.log("splited");
    username = splited;
  }
  const response = await fetch(
    `https://api.invitz.me/api/v1/invitation/username/${username}`
  );
  const json = await response.json();

  return {
    props: {
      data: username === "demo" ? json : {},
      username,
    },
  };
}
