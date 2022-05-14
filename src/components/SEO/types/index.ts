export type SeoDefaultData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      image: string;
      slogan: string;
      imageWidth: number;
      imageHeight: number;
      youtube: string;
      author: string;
    };
  };
};

export type MetaDecoratorProps = {
  metaTitle: string;
  metaDescription: string;
  author?: string;
  image: string;
  imageWidth?: number | string;
  imageHeight: number | string;
  disableSlogan?: true;
  extraMetaTags?: {
    property: string;
    content: string;
  }[];
};

export type GlobalSeoProps = {
  title?: string;
  description?: string;
  isArticle?: true;
  image?: string;
  imageAltText?: string;
  publishDate?: string;
  modifiedDate?: string;
};

export type BreadcrumbElementProps = {
  "@type": string;
  position: number;
  item: {
    "@type": string;
    "@id": string;
    url: string;
    name: string;
  };
};

export type breadCrumbProps = {
  link: string;
  text: string;
};

export type ArticleSchemaProps = {
  type?: string;
  title: string;
  description: string;
  image: string;
  publishDate: string;
  modifiedDate: string;
  authorName: string;
};
