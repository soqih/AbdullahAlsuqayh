import Bubble from "../../components/bubble/Bubble";
import Project from "../../components/project/Project";
import Blogs from "../blogs/Blogs";
import Projects from "../projects/Projects";
import styles from "./Home.module.css"
import { motion } from "framer-motion"
const Home = () => {



    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}


        >
            <div className={styles.home}>
                <div className={styles.bubbleHome}>
                    {<Bubble />}
                </div>

                <div className={styles.projectHome}>

                    {<Projects  />}
                </div>
                <div className={styles.blogHome}>
                    {<Blogs />}

                </div>
            </div>
        </motion.div>

    );
}

export default Home;