import styles from "./Loading.module.css"
import { motion } from "framer-motion";

const Loading = () => {
    return ( 
        <motion.div
        className={styles.container}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 3 }}
        transition={{
          type: "spring",
          stiffness: 5,
          damping: 0
        }}
        
      />
     );
}
 
export default Loading;