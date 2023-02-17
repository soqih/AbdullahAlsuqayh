import styles from "./BlogDetails.module.css"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { doc,  getDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Loading from "../../components/loading/Loading";

const BlogDetails = () => {
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState([]);
    const [open, setOpen] = useState(false);
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];

    const handleClick = () => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(window.location.href);
        setOpen(true);
    }
    const fetchPost = async () => {
        console.log(window.location.href)
        console.log(id)
        setIsLoading(true)
     
        const snap = await getDoc(doc(db, 'Blogs', id)).then((documnet) => {
            console.log(documnet.data())
            setBlog(documnet.data())
            console.log(JSON.stringify(documnet.data().date.toDate()).replace(/['"]+/g, ''))
            console.log(JSON.stringify(documnet.data().date.toDate().getFullYear()).concat(["/" + JSON.stringify(documnet.data().date.toDate().getMonth() + 1) + "/" + JSON.stringify(documnet.data().date.toDate().getDay() + 1)]))
            setIsLoading(false)

        })


    }


    useEffect(() => {
        fetchPost();
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

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
            // message="URL Copied"

            >

                <SnackbarContent style={{
                    backgroundColor: '#ededed',
                }}
                    message={<span className={styles.snackMessage} id="client-snackbar">Blog URL Copied</span>}
                />
            </Snackbar>


            {!isloading &&
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        {blog.title}
                    </h1>

                    <p className={styles.date}>
                        {
                            JSON.stringify(blog.date.toDate().getFullYear()).concat([" / " + JSON.stringify(blog.date.toDate().getMonth() + 1) + " / " + JSON.stringify(blog.date.toDate().getDay() + 1)])
                        }
                    </p>
                    <hr className={styles.divider} />
                    <p className={styles.body}>
                        {blog.body}
                    </p>
                    <button onClick={(() => handleClick())} className={styles.share}>
                        Share
                    </button>
                </div>}

                {isloading && <Loading />}
        </motion.div>

    );
}
export default BlogDetails;