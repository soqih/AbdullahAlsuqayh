import { motion } from "framer-motion"

const NotFound = () => {

    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="not-found" >
                    <h1 style={{ marginBottom: '1rem' , fontSize:'4rem'}}>404 😪</h1>
                    <p style={{ marginBottom: '1rem' }}> <b>Sorry</b>  that page cannot be found</p>
                

            </div>
        </motion.div>

    );
}

export default NotFound;