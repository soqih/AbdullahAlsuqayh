import styles from "./BlogDetails.module.css"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Loading from "../../components/loading/Loading";
import BreadCrumps from "../../components/breadCrumps/BreadCrumps";
import parse from 'html-react-parser';

const BlogDetails = () => {
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        // Copy the text inside the text field
        console.log('fd')
        navigator.clipboard.writeText(window.location.href);
        setOpen(true);
    }
    const fetchPost = async () => {
        setIsLoading(true)
        const snap = await getDoc(doc(db, 'Blogs', id)).then((documnet) => {
            setBlog(documnet.data())
            setIsLoading(false)
        })
    }


    useEffect(() => {
        fetchPost();
        document.title = "Abdullah Alsuqayh - ".concat(blog.title)
    }, [])

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>

            <Snackbar
                color="white"
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <SnackbarContent
                    style={{ backgroundColor: '#ededed' }}
                    message={<span className={styles.snackMessage} id="client-snackbar">Blog URL Copied</span>}
                />
            </Snackbar>

            {<BreadCrumps pages={[{ pageName: 'Blogs', pageURL: '/blogs' }, { pageName: blog.title, pageURL: '#' }]} />}

            {!isloading &&
                <div className={styles.container}>

                    <h2 className={styles.title}>
                        {blog.title}
                    </h2>

                    <p className={styles.date}>
                        {JSON.stringify(blog.date.toDate().getFullYear()).concat([" / " + JSON.stringify(blog.date.toDate().getMonth() + 1) + " / " + JSON.stringify(blog.date.toDate().getDate())])}
                    </p>

                    <hr className={styles.divider} />

                    <div className={styles.body}>
                        {parse(blog.body)}
                    </div>

                    <button onClick={handleClick} className={styles.share}>
                        Share
                    </button>
                </div>
            }

            {isloading && <Loading />}
        </motion.div>

    );
}
export default BlogDetails;