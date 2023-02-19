import styles from './Project.module.css'
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';


const Project = (props) => {
    return (

        <Link className={styles.box} style={{ textDecoration: 'none' }} to={"/projects/" + props.id} >
            {/* <div > */}
                <h1 className={styles.title}>
                    {props.title}
                </h1>
                <p className={styles.description}>
                    {props.subtitle}
                </p>
                <img className={styles.img} src={props.img} alt="" />
            {/* </div> */}
        </Link>

    );
}

export default Project;

