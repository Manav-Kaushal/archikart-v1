import React, { ReactNode } from "react";

type Props = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  content: ReactNode;
};

const TextWithIcon = ({ leftIcon, rightIcon, content }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      {leftIcon && leftIcon}
      <>{content}</>
      {rightIcon && rightIcon}
    </div>
  );
};

export default TextWithIcon;
