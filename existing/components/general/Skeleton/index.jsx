import classNames from "classnames";
import { motion } from "framer-motion";
import LoadingImage from "@/assets/icons/loadingImage.svg";

const Skeleton = ({ image, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      className={className}
    >
      <div
        className="bg-grey5 rounded flex items-center justify-center w-full h-full"
        {...props}
      >
        {image && <LoadingImage className="fill-grey4 w-1/6" />}
      </div>
    </motion.div>
  );
};

export default Skeleton;
