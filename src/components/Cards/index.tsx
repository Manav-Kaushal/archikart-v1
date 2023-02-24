import React from "react";

type Props = {
  title: string;
  description: string;
};

const BaseCard = ({ title, description }: Props) => {
  return (
    <div className="p-4 bg-brand-main/5 shadow rounded-xl hover:shadow-xl transition duration-200 ease-in-out">
      <h3 className="text-center font-semibold text-xl sm:text-lg py-4">{title}</h3>
      <p className="font-extralight text-[#777]">{description}</p>
    </div>
  );
};

export default BaseCard;
