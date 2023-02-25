import Project from "../../components/project/Project";
import styles from "./Projects.module.css"
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import Loading from "../../components/loading/Loading"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { motion } from "framer-motion"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import uuid from 'react-uuid';
import { Timestamp } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import MyEditor from "../../components/editor/Editor";
import Button from '@mui/material/Button';
import BreadCrumps from "../../components/breadCrumps/BreadCrumps";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase_setup/firebase';

const Projects = (props) => {

    const [projects, setProjects] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [image, setImage] = useState('')

    const [body, setBody] = useState('')
    const [htmlContent, setHtmlContent] = useState('')
    const [user, loading] = useAuthState(auth);

    const getContent = (htmlContentProp) => {
        setHtmlContent(htmlContentProp);

        return htmlContentProp
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const addTodo = async () => {
        try {
            const docRef = await addDoc(collection(db, "Projects"), {
                title: title,
                subtitle: subtitle,
                body: "" + htmlContent + "",
                id: title.concat(uuid()),
                date: Timestamp.now(),
                img: image
            });
        } catch (e) {
        }
    }
    const handleClose = (saveOrCancel) => {
        if (saveOrCancel === 1) {
            addTodo();
        }
        setOpen(false);
        setTitle('')
        setSubtitle('')
        setBody('')
    };
    const fetchPost = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "Projects"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setProjects(newData.sort((a, b) => b.date - a.date));
                setIsLoading(false)
            })
    }


    useEffect(() => {
        fetchPost();
        document.title = "Abdullah Alsuqayh - Work"

    }, [])


    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Dialog className="dialog" open={open} onClose={handleClose} fullWidth={true} maxWidth={'xl'}
            >
                <DialogTitle>Project</DialogTitle>
                <DialogContent
                    sx={{ minHeight: "500px" }}
                >

                    <TextField
                        autoFocus
                        required
                        margin="normal"
                        id="Title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        required
                        margin="normal"
                        id="Subtitle"
                        label="Subtitle"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        sx={{ marginBottom: '4rem' }}

                    />

                    <TextField

                        required
                        margin="normal"
                        id="image"
                        label="image"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        sx={{ marginBottom: '4rem' }}

                    />
                    <MyEditor getContent={getContent} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(() => handleClose(0))}>Cancel</Button>
                    <Button onClick={(() => handleClose(1))}>Save</Button>
                </DialogActions>
            </Dialog>
            <div className={styles.container}>

                {props.isProjectPage && isloading && < Loading />}
                {props.isProjectPage && <BreadCrumps pages={[{ pageName: 'Portfolio', pageURL: '/projects' }]} />}

                <div className={styles.btnContainer}>
                    {props.isProjectPage && user && <button onClick={handleClickOpen} className={styles.btn}>New Project</button>}

                </div>

                {
                    !isloading && projects.length > 0 && !props.isProjectPage&&
                    <div className={styles.title}>
                        <hr />
                        <h3 className={styles.titleText}>Portfolio</h3>
                        <hr />
                    </div>
                }
                <Grid2
                    container
                    spacing={{ xs: 4, md: 4 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    className={styles.container}
                >
                    {projects?.map((project, i) => (
                        <Grid2 key={i} display="flex" justifyContent="center" xs={12} sm={12} md={projects.length > 1 ? 6 : 12} className={styles.gridItem} >
                            <Project
                                // key={i}
                                title={project.title}
                                body={project.body}
                                date={project.date}
                                subtitle={project.subtitle}
                                img={project.img}
                                id={project.id}
                            />
                        </Grid2>
                    )
                    )}
                </Grid2>


            </div>
        </motion.div>

    );
}


export default Projects;