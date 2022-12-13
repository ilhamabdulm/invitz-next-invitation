import Head from "next/head";
import { useRouter } from "next/router";
import AutumnMorningTheme from "../components/templates/autumn-morning";
import CalmBlueTheme from "../components/templates/calm-blue";
import FlowerlyGreenTheme from "../components/templates/flowerly-green";
import SimpleWhiteTheme from "../components/templates/simple-white";
import SoftPurpleTheme from "../components/templates/soft-purple";

const themes = {
  "flowerly-green": FlowerlyGreenTheme,
  "autumn-morning": AutumnMorningTheme,
  "soft-purple": SoftPurpleTheme,
  "calm-blue": CalmBlueTheme,
  "simple-white": SimpleWhiteTheme,
};

export default function Home({ data, username }) {
  const { query } = useRouter();
  const { to, gid } = query;

  const ThemeComponent = themes[data?.selected_theme];

  return (
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
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;
  let username = "";
  if (host.includes("localhost")) {
    username = "testingsatu";
  } else {
    const splited = host.split(".")[0];
    console.log("splited");
    username = splited;
  }
  const response = await fetch(
    `https://api.invitz.me/api/v1/invitation/username/${username}`
  );
  const json = await response.json();
  console.log({ json });

  return {
    props: {
      data: json,
      username,
    },
  };
}
