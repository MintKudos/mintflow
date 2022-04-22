const baseUrl = "https://github.com/vechai/mintflow";

const siteConfig = {
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/docs`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: "React Tailwind CSS Components.",
    titleTemplate: "%s - Mintflow",
    description:
      "Collection of Accessible React UI Components using TailwindCSS.",
    siteUrl: "https://mintflow.com",
    twitter: {
      handle: "@mintflow",
      site: "@mintflow",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://mintflow.com",
      title: "Mintflow - Tailwind CSS Components",
      description:
        "Collection of Accessible React UI Components using TailwindCSS.",
      site_name:
        "Mintflow: Collection of Accessible React UI Components using TailwindCSS.",
      images: [
        {
          url: "https://mintflow.com/og-image.png",
          width: 1200,
          height: 627,
          alt:
            "Mintflow: Collection of Accessible React UI Components using TailwindCSS.",
        },
        {
          url: "https://mintflow.com/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt:
            "Mintflow: Collection of Accessible React UI Components using TailwindCSS.",
        },
      ],
    },
  },
};

export default siteConfig;
