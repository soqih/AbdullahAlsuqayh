import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const NotFound = () => {
    
    return (
        <motion.div
            // Prop that will animate when component is removed from DOM
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="not-found">
                <h2 style={{marginBottom:'0.4rem'}}>Sorry</h2>
                <p style={{marginBottom:'1rem'}}>That page cannot be found</p>
                <Link  style={{color:'#F2786D', borderBottom:'1px solid #F2786D', padding:'0.3rem 0rem'}} to="/home">  Back to the homepage </Link>
            </div>
        </motion.div>

    );
}

export default NotFound;