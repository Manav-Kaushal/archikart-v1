import Chip from "@components/Chip";
import TextWithIcon from "@components/TextWithIcon";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
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
        className="relative flex flex-col cursor-pointer group isolate"
      >
        <div className="relative aspect-[16/9] lg:shrink-0 overflow-hidden rounded-t-2xl">
          <Image
            src={sanityImageToUrl(data.mainImage).url()}
            alt={data.title}
            className="absolute inset-0 object-cover w-full h-full rounded-t-2xl bg-gray-50 transition__300 grayscale group-hover:grayscale-0"
            fill
          />
          <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10" />
          <Chip
            type="primary"
            label={data.category.title}
            sx="absolute top-4 right-4"
            size="small"
          />
        </div>
        <div className="p-4 border rounded-b-2xl">
          <div className="flex items-center text-xs text-gray-500 gap-x-2">
            <TextWithIcon
              leftIcon={<CalendarIcon className="w-4 h-4" />}
              content={
                <time dateTime={data._createdAt}>
                  {new Date(data._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              }
            />
            <b>·</b>
            <TextWithIcon
              leftIcon={<ClockIcon className="w-4 h-4" />}
              content={<span>{data.readingTime} mins Read</span>}
            />
          </div>
          <div className="relative max-w-xl">
            <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-800 capitalize group-hover:text-brand-main transition__300">
              <span className="absolute inset-0" />
              {data.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-2">
              {data.metaDescription}
            </p>
          </div>
          <div className="flex items-center pt-6 mt-6 border-t gap-x-4 border-gray-900/5">
            <div className="relative aspect-[1] w-10 ">
              <Image
                src={
                  data.author.image
                    ? sanityImageToUrl(data.author.image).url()
                    : "https://res.cloudinary.com/manavkaushal/image/upload/v1678268034/Projects/archikart.in/Avatar-Placeholder-400x400-1_orom7a.jpg"
                }
                alt={data.author.name}
                className="rounded-full"
                fill
              />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{data.author.name}</p>
              <p className="text-gray-400">{data.author.role.title}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
