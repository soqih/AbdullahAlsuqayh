import styles from "./Footer.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <a target="_blank" className={styles.a} href="https://api.whatsapp.com/send/?phone=966546358925&text&type=phone_number">
                    <WhatsAppIcon className={styles.icon} />
                </a>
                <a target="_blank" className={styles.a} href="mailto:abdallahalsuqayh@gmail.com">
                    <MailIcon className={styles.icon} />
                </a>
                <a target="_blank" className={styles.a} href="https://www.linkedin.com/in/abdullah-alsuqayh/">
                    <LinkedInIcon className={styles.icon} />
                </a>
            </div>
            <div className={styles.text}>
                {<FavoriteIcon className={styles.love} />} By Abdullah
            </div>

        </div>
    );
}

export default Footer;