import Typography from "@components/Typography";
import { HeartIcon } from "@heroicons/react/24/outline";
import { app } from "@utils/config";
import Image from "next/image";
import React from "react";

type Props = {};

const socialData = [
  {
    name: "Facebook",
    icon: "/v1677494448/Projects/archikart.in/facebook_red_tgifjc.svg",
  },
  {
    name: "Twitter",
    icon: "/v1677495017/Projects/archikart.in/twitter_red_wyxppb.svg",
  },
  {
    name: "Instagram",
    icon: "/v1677495066/Projects/archikart.in/instagram_red_f0hsdx.svg",
  },
  {
    name: "LinkedIn",
    icon: "/v1677495021/Projects/archikart.in/linkedin-2_red_azgacn.svg",
  },
];

const Footer = (props: Props) => {
  return (
    <div className="py-12 mt-24 bg-brand-main/10">
      <div className="text-center global__container">
        <div className="space-y-6">
          <Typography variant="h5" sx="font-bold text-brand-main">
            About Us
          </Typography>
          <Typography
            variant="bodySmall"
            sx="max-w-7xl mx-auto text-brand-grey"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab harum
            veniam similique ratione delectus necessitatibus, corporis deserunt
            ea sunt numquam tenetur error laudantium rerum magni hic consectetur
            ducimus praesentium nam!
          </Typography>
        </div>
        <div className="flex items-center py-6 mx-auto space-x-6 w-fit">
          {socialData.map((social) => (
            <Image
              key={social.name}
              src={`${app.cloudinaryBaseUrl}${social.icon}`}
              alt={social.name}
              width={35}
              height={35}
              className="cursor-pointer hover:-mt-2 transition__300"
            />
          ))}
        </div>
        <p className="text-brand-grey">
          Made With <HeartIcon className="inline w-4 h-4 text-brand-main" /> By
          *Author*
        </p>
      </div>
    </div>
  );
};

export default Footer;
