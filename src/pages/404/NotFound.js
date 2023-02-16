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
                <h2>Sorry</h2>
                <p>That page cannot be found</p>
                <Link to="/"> Back to the homepage </Link>
            </div>
        </motion.div>

    );
}

export default NotFound;