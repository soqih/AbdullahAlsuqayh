import Project from "../../components/project/Project";
import styles from "./Projects.module.css"
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import Loading from "../../components/loading/Loading"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { motion } from "framer-motion"

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    const fetchPost = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "Projects"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setProjects(newData);
                console.log(projects, newData);
                setIsLoading(false)
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
            <div className={styles.container}>
                {isloading && < Loading />}

                <Grid2
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                // className="container"

                >


                    {projects?.map((project, i) => (
                        <Grid2 display="flex" justifyContent="center" xs={12} sm={12} md={6} >

                            <Project
                                key={i}
                                title={project.title}
                                body={project.body}
                                date={project.date}
                                subtitle={project.subtitle}
                                img={project.img}
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