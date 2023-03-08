import React from "react";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import RichTextStyling from "@components/RichTextStyling";
import { Post } from "@utils/types/blog";
import { client } from "@utils/sanity/sanity.client";
import { NextSeo } from "next-seo";
import Banner from "@components/Banner";
import { capitalize } from "@utils/helpers";
import Button from "@components/Button";
import { useRouter } from "next/router";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import sanityImageToUrl from "@utils/sanity/sanityImageToUrl";
import { motion } from "framer-motion";
import { MetaTag } from "next-seo/lib/types";
import { app } from "@utils/config";

type Props = {
  post: Post;
};

const SinglePost = ({ post }: Props) => {
  const router = useRouter();
  if (!post) {
    return <>Loading...</>;
  }
  return (
    <>
      <NextSeo
        title={capitalize(post.title)}
        description={post.metaDescription}
        canonical={`${app.website}/blog/${post.slug.current}`}
        additionalMetaTags={[
          {
            name: "keywords",
            content: post.metaKeywords,
          },
          {
            name: "author",
            content: post.author.name,
          },
        ]}
      />
      <Banner backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      <section className="bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 px-10 -mt-24 bg-white global__container pb-28 rounded-t-xl"
        >
          <div className="absolute left-0 -top-12">
            <Button
              onClick={() => router.push("/blog")}
              sx="flex items-center space-x-2"
              size="small"
            >
              <ArrowUturnLeftIcon className="w-4 h-4" />
              <span>Back To Blogs</span>
            </Button>
          </div>
          <article className="space-y-2">
            <div className="relative flex flex-col justify-between min-h-56 md:flex-row">
              <section className="w-full p-5">
                <div className="pb-10">
                  {post.categories.map((category) => (
                    <p
                      key={category._id}
                      className="px-3 py-1 mt-4 text-xs font-semibold text-white bg-gray-800 rounded-full w-fit"
                    >
                      {category.title}
                    </p>
                  ))}
                  <h1 className="mt-4 mb-1 text-4xl font-extrabold">
                    {post.title}
                  </h1>
                  <div className="flex space-x-2 text-base text-brand-grey">
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <span>|</span> <p>{post.author.name}</p>
                    <span>|</span>
                    <p>{post.readingTime} mins</p>
                  </div>
                </div>
                {/* 
                <div>
                  <h2 className="pt-10 italic">{post.description}</h2>
                </div> */}
                <div className="mb-10 relative w-full aspect-[2/0.5] rounded-xl shadow">
                  <Image
                    src={sanityImageToUrl(post.mainImage).url()}
                    alt={post.title}
                    className="object-cover rounded-xl"
                    fill
                  />
                </div>
                <PortableText value={post.body} components={RichTextStyling} />
              </section>
            </div>
          </article>
        </motion.div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const query = groq`
    *[_type=='post']
    {
      slug
    }
  `;
  const data: Post[] = await client.fetch(query);

  const paths = data.map((post) => ({
    params: { slug: post.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;
  const post = await client.fetch(query, { slug: params.slug });

  // Pass post data to the page via props
  return { props: { post } };
}

export default SinglePost;
