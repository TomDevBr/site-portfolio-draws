import { SideBar } from "../components/SideBar";
import styles from '../styles/pages/naruto.module.css'

export default function Naruto () {
    return (
         <div className={styles.container}>
            <SideBar/>
            <div className={styles.main}>
                <h1 className={styles.title}>Naruto</h1>
                        <div className={styles.responsive}>
                        <div className={styles.gallery}>
                            <a target="_blank" href="/itachi.jpg">
                                <img src="/itachi.jpg" alt="Cinque Terre" />
                            </a>
                        </div>
                    </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/kakashi.jpg">
                        <img src="/kakashi.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                 </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/narutoshippuden.jpg">
                        <img src="/narutoshippuden.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/Sasuke.jpg">
                        <img src="/Sasuke.jpg" alt="Cinque Terre" />
                        </a>   
                    </div>
                </div>
                </div>   
        </div>
    )
}