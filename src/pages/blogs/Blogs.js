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
const Blogs = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [body, setBody] = useState('')

    const addTodo = async () => {

       
        try {
            const docRef = await addDoc(collection(db, "Blogs"), {
            //   todo: todo,    
                title: title,
                subtitle: subtitle,
                body: body,
                id: title.concat(uuid())
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }


    const fetchPost = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "Blogs"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBlogs(newData);
                console.log(blogs, newData);
                setIsLoading(false)
            })
    }


    useEffect(() => {
        fetchPost();
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (saveOrCancel) => {
        if(saveOrCancel===1){
            addTodo();
        }
        setOpen(false);
        console.log(title, subtitle, body)
        setTitle('')
        setSubtitle('')
        setBody('')
        console.log(saveOrCancel)
    };
    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Dialog className="dialog" open={open} onClose={handleClose}
            >
                <DialogTitle>Blog</DialogTitle>
                <DialogContent


                >
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
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
                        onChange = {(e)=> setTitle(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="normal"
                        id="Subtitle"
                        label="Subtitle"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={subtitle}
                        onChange = {(e)=> setSubtitle(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        required
                        margin="normal"
                        id="Body"
                        label="Body"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline 
                        value={body}
                        onChange = {(e)=> setBody(e.target.value)}
                        
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(()=>handleClose(0))}>Cancel</Button>
                    <Button onClick={(()=>handleClose(1))}>Save</Button>
                </DialogActions>
            </Dialog>

            <div className={styles.blogs}>
                {props.isBlogPage && <button onClick={handleClickOpen} className={styles.btn}>New Blog</button>}
                {isloading && < Loading />}
                {blogs?.map((blog, i) => (
                    <Blog
                        key={blog.id}
                        title={blog.title}
                        body={blog.body}
                        date={blog.date}
                        subtitle={blog.subtitle}
                        id = {blog.id}
                        />
                )
                )}
            </div>

        </motion.div>

    );
}

export default Blogs;