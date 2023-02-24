import styles from './Project.module.css'
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';


const Project = (props) => {
    return (

        <Link className={styles.box} style={{ textDecoration: 'none', backgroundImage: `url(${props.img})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover' }} to={"/projects/" + props.id} >
            <div className={styles.textContainer} >
                <h1 className={styles.title}>
                    {props.title}
                </h1>
                <p className={styles.description}>
                    {props.subtitle}
                </p>
            </div>

                {/* <img className={styles.img} src={props.img} alt="" /> */}
        </Link>

    );
}

export default Project;

