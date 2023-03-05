import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Section from "@components/Section";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

type Props = {};

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Blog = (props: Props) => {
  return (
    <>
      <NextSeo title="From the blog" />
      <Banner
        title="From the blog"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
          <div className="space-y-20 md:col-span-3 lg:space-y-16">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative flex flex-col gap-4 sm:gap-8 isolate lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-48 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="px-4">
                  <div className="flex items-center text-xs gap-x-4">
                    <time dateTime={post.datetime} className="text-gray-600">
                      {post.date}
                    </time>
                    <p className="relative z-10 rounded-full bg-brand-main/10 py-1.5 px-3 font-medium text-gray-600">
                      {post.category.title}
                    </p>
                  </div>
                  <div className="relative max-w-xl group">
                    <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-800 group-hover:text-brand-main transition__300">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  {/* <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                  <div className="relative flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-400">{post.author.role}</p>
                    </div>
                  </div>
                </div> */}
                </div>
              </article>
            ))}
          </div>
          <aside className="hidden md:col-span-1 md:block md:sticky md:h-fit md:top-28">
            <p className="w-full px-4 py-3 font-semibold text-center text-white bg-brand-main">
              POST CATEGORIES
            </p>
            <div className="py-4 space-y-4">
              {[
                { title: "Business Analytics", numberOfPosts: 21 },
                { title: "Data Science", numberOfPosts: 28 },
                { title: "Machine Learning", numberOfPosts: 15 },
              ].map((category) => (
                <div
                  key={category.title}
                  className="flex items-center justify-between px-2 text-base font-medium cursor-pointer text-gray-8 00 hover:text-brand-main transition__300"
                >
                  <span>{category.title}</span>
                  <span>{category.numberOfPosts}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
};

export default Blog;
