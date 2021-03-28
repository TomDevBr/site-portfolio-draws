import { SideBar } from "../components/SideBar";
import styles from '../styles/pages/dragonball.module.css'

export default function Dragonball () {
    return (
         <div className={styles.container}>
            <SideBar/>
            <div className={styles.main}>
                <h1 className={styles.title}> Dragonball</h1>
                        <div className={styles.responsive}>
                        <div className={styles.gallery}>
                            <a target="_blank" href="/gokussj1.jpg">
                                <img src="/gokussj1.jpg" alt="Cinque Terre" />
                            </a>
                        </div>
                    </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="./broly.jpg">
                        <img src="/broly.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                 </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/gohan.jpg">
                        <img src="/gohan.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/vegita.jpg">
                        <img src="/vegita.jpg" alt="Cinque Terre" />
                        </a>   
                    </div>
                </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/majin.jpg">
                        <img src="/majin.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                </div>
                </div>   
        </div>

    )
}