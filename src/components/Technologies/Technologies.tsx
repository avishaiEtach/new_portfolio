import { technologies } from "../../assets/constants";
import { motion } from "framer-motion";

export const Technologies = () => {
  const iconVariants = (duration: number) => {
    return {
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  };
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((technology, index) => (
          <motion.div
            variants={iconVariants(technology.duration) as any}
            initial="initial"
            animate="animate"
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <technology.icon className={`text-7xl ${technology.color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
