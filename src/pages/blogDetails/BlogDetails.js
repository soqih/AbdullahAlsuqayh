import styles from "./BlogDetails.module.css"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { doc, collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
// import { firebase } from "@firebase/firestore"


const BlogDetails = () => {
    const { id } = useParams();
    const [isloading, setIsLoading] = useState(false)
    const [blog, setBlog] = useState([]);

    const fetchPost = async () => {
        console.log(id)
        setIsLoading(true)
        // const documnet = db.collection('books').doc(id).get()
        // const documnet = db.collection('Blogs').where('bid', '==', id).get()
        const snap = await getDoc(doc(db, 'Blogs', id)).then((documnet) => {
            console.log(documnet.data())
            setBlog(documnet.data())
            console.log(JSON.stringify(documnet.data().date.toDate()).replace(/['"]+/g, ''))
            console.log(JSON.stringify(documnet.data().date.toDate().getFullYear()).concat(["/" + JSON.stringify(documnet.data().date.toDate().getMonth() + 1) + "/" + JSON.stringify(documnet.data().date.toDate().getDay() + 1)]))

        })


    }


    useEffect(() => {
        fetchPost();
    }, [])
    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div>
                <h1>
                    {blog.title}
                </h1>
                { 
                JSON.stringify(blog.date.toDate().getFullYear()).concat(["/" +  JSON.stringify(blog.date.toDate().getMonth()+1)+ "/" + JSON.stringify(blog.date.toDate().getDay()+1) ])
                }

                <p>
                    { }
                </p>
                <p>
                    {blog.body}
                </p>
            </div>
        </motion.div>

    );
}

export default BlogDetails;