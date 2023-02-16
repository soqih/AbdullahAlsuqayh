import styles from './Project.module.css'


const Project = (props) => {
    return (
        <div className={styles.box}>
            <h1 className={styles.title}>
                {props.title}
            </h1>
            <p className={styles.description}>
                {props.subtitle}
            </p>
            <img className={styles.img} src={props.img} alt="" />
        </div>
    );
}

export default Project;

