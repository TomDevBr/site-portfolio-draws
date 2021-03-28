import { SideBar } from "../components/SideBar";
import styles from '../styles/pages/bleach.module.css'

export default function Bleach () {
    return (
         <div className={styles.container}>
            <SideBar/>
            <div className={styles.main}>
                <h1 className={styles.title}>Bleach</h1>
                    <div className={styles.responsive}>
                        <div className={styles.gallery}>
                            <a target="_blank" href="/ichigo.jpg">
                                <img src="/ichigo.jpg" alt="Cinque Terre" />
                            </a>
                        </div>
                    </div>
                     <div className={styles.responsive}>
                        <div className={styles.gallery}>
                            <a target="_blank" href="/ichigoKurosaki.jpg">
                                <img src="/ichigoKurosaki.jpg" alt="Cinque Terre" />
                            </a>
                        </div>
                    </div>
                </div>   
        </div>
    )
}