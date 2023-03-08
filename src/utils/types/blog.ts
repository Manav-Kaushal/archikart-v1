export type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  category: Category;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
  role: Role;
}

export interface Image {
  _type: "image";
  asset: Reference;
}

export interface Reference {
  _ref: string;
  _type: "reference";
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

export interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

export interface Role extends Base {
  _type: "role";
  title: string;
}
export interface Category extends Base {
  type: "category";
  description: string;
  title: string;
}

export interface MainImage {
  _type: "image";
  asset: Reference;
}

export interface Title {
  _type: "string";
  current: string;
}
