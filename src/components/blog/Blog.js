import { Link } from 'react-router-dom'
import styles from "./Blog.module.css"
const Blog = (props) => {
    return (
        <Link className={styles.blog} style={{ textDecoration: 'none' }} to={"/blogs/" + props.id}>
            {/* <div> */}
            <div className={styles.textContainer}>
                <h2 style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    lineClamp: 3,
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                }} className={styles.title}>
                    {props.title}
                </h2>

                <p className={styles.date}>
                    {
                        JSON.stringify(props.date.toDate().getFullYear()).concat([" / " + JSON.stringify(props.date.toDate().getMonth() + 1) + " / " + JSON.stringify(props.date.toDate().getDate())])
                    }
                </p>
            </div>
            <img className={styles.img} src={props.backgroundImage} alt="" />

            {/* </div> */}
        </Link>

    );
}

export default Blog;
