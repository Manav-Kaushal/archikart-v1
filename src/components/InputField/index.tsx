// import { classNames } from "@utils/helpers";
// import { InputHTMLAttributes, ReactHTMLElement, ReactNode } from "react";

// interface InputProps extends ReactHTMLElement<InputHTMLAttributes> {
//   type: string;
//   placeholder?: string;
//   LeftIcon?: any;
//   RightIcon?: any;
//   sx?: string;
//   shape?: "regular" | "sharp";
// }

const getShape = {
  regular: "rounded-md",
  sharp: "rounded-none",
};

// const InputField: React.FC<InputProps> = ({
//   type,
//   placeholder,
//   LeftIcon,
//   RightIcon,
//   sx,
//   shape = "regular",
//   ...props
// }) => {
//   const renderLeftIcon = (): ReactNode => {
//     if (!LeftIcon) return null;
//     return (
//       <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//         <LeftIcon className="w-5 h-5 text-gray-500" />
//       </span>
//     );
//   };

//   const renderRightIcon = (): ReactNode => {
//     if (!RightIcon) return null;
//     return (
//       <span className="absolute inset-y-0 right-0 flex items-center pr-2">
//         <RightIcon className="w-5 h-5 text-gray-500" />
//       </span>
//     );
//   };

//   const InputElement = () => (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className={classNames(
//         "w-full px-4 py-2 bg-white border outline-none focus:ring-1 focus:ring-brand-main transition__300",
//         sx,
//         getShape[shape],
//         LeftIcon && "pl-10",
//         RightIcon && "pr-10"
//       )}
//       {...props}
//     />
//   );

//   return (
//     <div className="relative w-full">
//       {renderLeftIcon()}

//       <InputElement />

//       {renderRightIcon()}
//     </div>
//   );
// };

// export default InputField;

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = {
  variant?: "input" | "textarea";
  shape?: "regular" | "sharp";
} & InputProps &
  TextareaProps;

const InputField: React.FC<Props> = ({
  variant = "input",
  shape = "regular",
  ...props
}) => {
  const baseClasses =
    "w-full px-4 py-2 bg-white border outline-none focus:ring-1 focus:ring-brand-main transition__300";

  const inputClasses = `${baseClasses} ${getShape[shape]} ${
    variant === "input" ? "" : "resize-none h-32"
  }`;

  const textareaClasses = `${baseClasses} ${getShape[shape]} ${
    variant === "textarea" ? "resize-none h-32" : ""
  }`;

  return (
    <>
      {variant === "input" ? (
        <input className={inputClasses} {...props} />
      ) : (
        <div className="relative">
          <textarea className={textareaClasses} {...props} />
          <p className="absolute text-sm text-gray-400 right-2 bottom-3">
            ({props.maxLength! - props.value!.toString().length})
          </p>
        </div>
      )}
    </>
  );
};

export default InputField;
