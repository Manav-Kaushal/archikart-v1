import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Section from "@components/Section";
import { NextSeo } from "next-seo";
import React from "react";
import { client } from "@utils/sanity/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import { groq } from "next-sanity";
import BlogListPreview from "@components/Blog/BlogList/Preview";
import BlogList from "@components/Blog/BlogList";
import { useRouter } from "next/router";
import BlogSidebar from "@components/Blog/BlogSidebar";
import Button from "@components/Button";
import { app } from "@utils/config";

export const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

const Blog = ({ preview, posts }: any) => {
  const router = useRouter();

  if (preview) {
    return (
      <>
        <NextSeo title="Preview | Blog" />
        <Banner
          title="Blog Preview"
          backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <Button
            variant="outline-white"
            onClick={() => router.push("/api/exit-preview")}
          >
            Exit preview?
          </Button>
        </Banner>
        <Section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
            <div className="space-y-20 md:col-span-3 lg:space-y-16">
              <PreviewSuspense
                fallback={
                  <div role="status">
                    <p className="text-lg text-center animate-pulse text-brand-main">
                      Loading Preview Data...
                    </p>
                  </div>
                }
              >
                <BlogListPreview router={router} query={query} />
              </PreviewSuspense>
            </div>
            <aside>
              <BlogSidebar />
            </aside>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <NextSeo title="Blog" />
      <Banner
        title={`${app.name} Blog`}
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <div className="section__card">
        <Section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
            <div className="space-y-20 md:col-span-3 lg:space-y-16">
              <BlogList posts={posts} />
            </div>
            <aside>
              <BlogSidebar />
            </aside>
          </div>
        </Section>
      </div>
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const posts = await client.fetch(query);

  return { props: { preview, posts } };
};

export default Blog;
