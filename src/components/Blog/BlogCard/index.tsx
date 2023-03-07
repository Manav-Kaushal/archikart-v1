import sanityImageToUrl from "@utils/sanity/sanityImageToUrl";
import { Post } from "@utils/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: Post;
};

const BlogCard = ({ data }: Props) => {
  return (
    <Link href={`/blog/${data.slug.current}`}>
      <article
        key={data._id}
        className="relative flex flex-col gap-4 cursor-pointer group sm:gap-8 isolate lg:flex-row"
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-48 lg:shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={sanityImageToUrl(data.mainImage).url()}
            alt={data.title}
            className="absolute inset-0 object-cover w-full h-full scale-100 rounded-2xl bg-gray-50 group-hover:scale-110 transition__300"
            fill
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="px-4">
          <div className="flex items-center text-xs gap-x-4">
            <time dateTime={data._createdAt} className="text-gray-600">
              {new Date(data._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <p className="relative z-10 rounded-full bg-brand-main/10 py-1.5 px-3 font-medium text-gray-600">
              {data.categories[0].title}
            </p>
          </div>
          <div className="relative max-w-xl">
            <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-800 group-hover:text-brand-main transition__300">
              <span className="absolute inset-0" />
              {data.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {data.description}
            </p>
          </div>
          <div className="flex pt-6 mt-6 border-t border-gray-900/5">
            <div className="relative flex items-center gap-x-4">
              {/* <Image
                  src={sanityImageToUrl(data.author.image).url()}
                  alt={data.author.name}
                  className="w-10 h-10 rounded-full bg-gray-50"
                  fill
                /> */}
              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  {data.author.name}
                </p>
                {/* <p className="text-gray-400">{data.author}</p> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
