import styles from "./breadCrumps.module.css"
import { Link } from "react-router-dom";

const BreadCrumps = (props) => {
    return (
        <div className={styles.breadcrumps}>
            {<Link className={styles.link} to="/home">Home</Link>}
            <div className={styles.seperator}>></div>

            {props.pages.map((page, i) => (
                <div className={styles.linksContainer} key={i}>
                    <Link  className={styles.link} to={page.pageURL}>{page.pageName}</Link>
                   {props.pages.length - 1 > i &&  <div className={styles.seperator}>></div> }

                </div>

            ))}

        </div>
    );
}

export default BreadCrumps;