import { classNames } from "@utils/helpers";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  sx?: string;
  bottomPadding?: boolean;
};

const Section = ({ children, sx = "", bottomPadding = false }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={classNames(
        "global__container pt-32",
        sx,
        bottomPadding && "pb-32"
      )}
    >
      {children}
    </motion.div>
  );
};

export default Section;
