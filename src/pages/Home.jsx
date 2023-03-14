import { Popular } from "../components/Popular";
import { Picks } from "../components/Picks";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Picks />
      <Popular />
    </motion.div>
  );
};
