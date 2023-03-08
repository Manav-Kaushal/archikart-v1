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
import {
  ArrowUturnLeftIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import sanityImageToUrl from "@utils/sanity/sanityImageToUrl";
import { motion } from "framer-motion";
import { MetaTag } from "next-seo/lib/types";
import { app } from "@utils/config";
import Chip from "@components/Chip";
import TextWithIcon from "@components/TextWithIcon";
import Section from "@components/Section";

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
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 pb-16 -mt-24 bg-white rounded-t-xl global__container"
        >
          <div className="absolute left-0 ml-4 md:ml-0 -top-12">
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
              <section className="pt-6 md:pt-12 md:px-6">
                <div className="pb-10">
                  <Chip type="secondary" label={post.category.title} />
                  <h1 className="mt-4 mb-1 text-3xl font-extrabold md:text-4xl">
                    {post.title}
                  </h1>
                  <div className="flex flex-col text-base md:space-x-2 md:flex-row text-brand-grey">
                    <div className="flex items-center space-x-2">
                      <TextWithIcon
                        leftIcon={<CalendarIcon className="w-5 h-5" />}
                        content={
                          <span>
                            {new Date(post._createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        }
                      />
                      <span>|</span>
                      <TextWithIcon
                        leftIcon={<ClockIcon className="w-5 h-5" />}
                        content={<span>{post.readingTime} mins</span>}
                      />
                    </div>
                    <span className="hidden md:inline-block">|</span>
                    <TextWithIcon
                      leftIcon={<UserIcon className="w-5 h-5" />}
                      content={<span>{post.author.name}</span>}
                    />
                  </div>
                </div>
                {/* 
                <div>
                  <h2 className="pt-10 italic">{post.description}</h2>
                </div> */}
                <div className="mb-10 relative w-full aspect-[16/9] md:aspect-[2/0.5] rounded-xl shadow">
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
      author->{
        ...,
        role->,
      },
      category->
    }
  `;
  const post = await client.fetch(query, { slug: params.slug });

  // Pass post data to the page via props
  return { props: { post } };
}

export default SinglePost;
