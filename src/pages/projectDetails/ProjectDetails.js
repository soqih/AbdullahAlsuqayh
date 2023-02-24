import styles from "./ProjectDetails.module.css"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Loading from "../../components/loading/Loading";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageViewer from 'react-simple-image-viewer';
import BreadCrumps from "../../components/breadCrumps/BreadCrumps";
import parse from 'html-react-parser';

const ProjectDetails = () => {
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(true)
    const [project, setProject] = useState([]);
    const [open, setOpen] = useState(false);
 

    const handleClick = () => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(window.location.href);
        setOpen(true);
    }
    const fetchPost = async () => {
        setIsLoading(true)

        const snap = await getDoc(doc(db, 'Projects', id)).then((documnet) => {
            setProject(documnet.data())
            setIsLoading(false)
            // setImages(documnet.data().images)

        })


    }


    useEffect(() => {
        fetchPost();
        document.title = "Abdullah Alsuqayh - ".concat(project.title)

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
                    message={<span className={styles.snackMessage} id="client-snackbar">Project URL Copied</span>}
                />
            </Snackbar>

            {!isloading && <BreadCrumps pages={[{pageName:'Projects', pageURL:'/projects'},{pageName: project.title, pageURL: '#'}]}/>}

            {!isloading &&
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        {project.title}
                    </h1>

                    <p className={styles.date}>
                        {
                            JSON.stringify(project.date.toDate().getFullYear()).concat([" / " + JSON.stringify(project.date.toDate().getMonth() + 1) + " / " + JSON.stringify(project.date.toDate().getDate() )])
                        }
                    </p>
                    <hr className={styles.divider} />
                    <div className={styles.body}>
                        {
                            parse(project.body)
                        }
                    </div>

                    <button onClick={(() => handleClick())} className={styles.share}>
                        Share
                    </button>
                </div>}

            {isloading && <Loading />}
        </motion.div>

    );
}
export default ProjectDetails;