import Bubble from "../../components/bubble/Bubble";
import Project from "../../components/project/Project";
import Blogs from "../blogs/Blogs";
import Projects from "../projects/Projects";
import styles from "./Home.module.css"
import { motion } from "framer-motion"
import { useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Home = () => {

    useEffect(() => {
        document.title = "Abdullah Alsuqayh"
    }, []);


    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className={styles.home}>

                <div className={styles.bubble}>
                    {<Bubble />}
                </div>

                <div className={styles.me}>
                    <div className={styles.title}>
                        {/* <hr /> */}
                        <h3 className={styles.titleText}>Me</h3>
                        {/* <hr /> */}
                    </div>
                    <p style={{ textAlign: 'center', lineHeight: '2.5rem', fontSize: '1.3rem' }}>
                        <b>Software Engineer</b> & <b>UX Enthusiast</b> <br /> my passion lies in crafting user-centric applications
                    </p>
                    <div className={styles.icons}>
                        <a target="_blank" className={styles.a} href="https://api.whatsapp.com/send/?phone=966546358925&text&type=phone_number">
                            <WhatsAppIcon className={styles.icon} />
                        </a>
                        <a target="_blank" className={styles.a} href="mailto:abdallahalsuqayh@gmail.com">
                            <MailIcon className={styles.icon} />
                        </a>
                        <a target="_blank" className={styles.a} href="https://www.linkedin.com/in/abdullah-alsuqayh/">
                            <LinkedInIcon className={styles.icon} />
                        </a>
                    </div>
                </div>
                <div className={styles.project}>
                    {<Projects />}
                </div>

                <div className={styles.blog}>
                    {<Blogs />}
                </div>

            </div>
        </motion.div>

    );
}

export default Home;