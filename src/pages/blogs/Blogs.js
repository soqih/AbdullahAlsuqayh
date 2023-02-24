import Blog from "../../components/blog/Blog";
import styles from "./Blogs.module.css"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import { useState, useEffect } from 'react';
import Loading from "../../components/loading/Loading"
import { motion } from "framer-motion"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase_setup/firebase';
import BreadCrumps from "../../components/breadCrumps/BreadCrumps";
import { Timestamp } from 'firebase/firestore';
import MyEditor from "../../components/editor/Editor";
// import draftToHtml from "draftjs-to-html";


const Blogs = (props) => {
    const [user, loading] = useAuthState(auth);

    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [htmlContent, setHtmlContent] = useState('')
    const [backgroundImage, setBackgroundImage] = useState('')
    const getContent =  (htmlContentProp) => {
        setHtmlContent(htmlContentProp);
        return htmlContentProp
    }


    const addTodo = async () => {
        try {
            const docRef = await addDoc(collection(db, "Blogs"), {
                title: title,
                body: "" + htmlContent + "",
                id: title.concat(uuid()),
                date: Timestamp.now(),
                images: [],
                backgroundImage: backgroundImage
            });
        } catch (e) {
        }
    }


    const fetchPost = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "Blogs"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBlogs(newData.sort((a,b)=>b.date-a.date));
                setIsLoading(false)
            })
    }


    useEffect(() => {
        fetchPost();
        document.title = "Abdullah Alsuqayh - Blogs"

    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = (saveOrCancel) => {
        if (saveOrCancel === 1) {
            addTodo();
        }
        setOpen(false);
        setTitle('')
    };
    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Dialog className="dialog" open={open} onClose={handleClose } fullWidth={true} maxWidth={'xl'} 
            >
                <DialogTitle>Blog</DialogTitle>
                <DialogContent
                    sx={{minHeight:"500px"}}
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
                        id="backgroundImage"
                        label="backgroundImage"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={backgroundImage}
                        onChange={(e) => setBackgroundImage(e.target.value)}
                        sx={{marginBottom:'4rem'}}
                    />

                    <MyEditor getContent={getContent}/>

                </DialogContent>
                <DialogActions>
                    <Button onClick={(() => handleClose(0))}>Cancel</Button>
                    <Button onClick={(() => handleClose(1))}>Save</Button>
                </DialogActions>
            </Dialog>

            <div className={styles.blogs}>
                {props.isBlogPage && <BreadCrumps pages={[{ pageName: 'Blogs', pageURL: '/blogs' }]} />}

                {props.isBlogPage && user && <button onClick={handleClickOpen} className={styles.btn}>New Blog</button>}
                {props.isBlogPage && isloading && < Loading />}
                {blogs?.map((blog, i) => (
                    <Blog
                        key={blog.id}
                        title={blog.title}
                        body={blog.body}
                        date={blog.date}
                        subtitle={blog.subtitle}
                        id={blog.id}
                        backgroundImage = {blog.backgroundImage}
                    />
                )
                )}
            </div>

        </motion.div>

    );
}

export default Blogs;