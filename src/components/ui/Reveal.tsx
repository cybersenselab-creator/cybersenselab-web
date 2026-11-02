import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { children: ReactNode; delay?: number; y?: number; className?: string; once?: boolean };

/** Fades and slides children in when they scroll into view. */
export default function Reveal({ children, delay = 0, y = 28, className, once = true }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
