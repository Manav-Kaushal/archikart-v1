import Typography from "@components/Typography";
import React, { ReactNode } from "react";

type Props = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  content: ReactNode;
};

const TextWithIcon = ({ leftIcon, rightIcon, content }: Props) => {
  return (
    <Typography variant="bodySmall" sx="flex items-center space-x-2">
      {leftIcon && leftIcon}
      <>{content}</>
      {rightIcon && rightIcon}
    </Typography>
  );
};

export default TextWithIcon;
