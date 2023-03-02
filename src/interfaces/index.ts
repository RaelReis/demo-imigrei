export interface Thumbnail {
  id: string;
  url: string;
}

export interface Post {
  author: string;
  title: string;
  description: string;
  category: "portugal" | "italia" | "dicas_imigrei";
  tags: string[];
  content: {
    markdown: string;
    html: string;
  };
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  thumbnail: Thumbnail;
  thumbnailDescription: string;
}
