import { Link } from 'react-router-dom'
import styles from "./Blog.module.css"
const Blog = (props) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={"/blogs/" + props.id}>
            <div  className={styles.blog}>
                <h1 className={styles.title}>
                    {props.title}
                </h1>
                <p className={styles.description}>
                    {props.subtitle}
                </p>
            </div>
        </Link>

    );
}

export default Blog;
