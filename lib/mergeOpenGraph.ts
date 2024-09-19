import type { Metadata } from "next";

//Default open graph

const defaultOpenGraph: Metadata["openGraph"] = {
  title: "Foodmasters ecommerce",
  description: "A fully functioning ecommerce website",

  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
    },
  ],
  type: "website",
  url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  siteName: "NextJs App",
};

// Dynamic open graph

export const mergeOpenGraph = (og?: Metadata["openGraph"]) => {
  return {
    ...defaultOpenGraph,
    ...og,
    image: og?.images ? og.images : defaultOpenGraph.images,
    title: og?.title ? og.title : defaultOpenGraph.title,
    url: og?.url ? og.url : defaultOpenGraph.url,
  };
};
