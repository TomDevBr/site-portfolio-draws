import { SideBar } from "../components/SideBar";
import styles from '../styles/pages/outros.module.css'

export default function Outros () {
    return (
         <div className={styles.container}>
            <SideBar/>
            <div className={styles.main}>
                <h1 className={styles.title}>Outros</h1>
                    <div className={styles.responsive}>
                        <div className={styles.gallery}>
                            <a target="_blank" href="/zoro.jpg">
                                <img src="/zoro.jpg" alt="Cinque Terre" />
                            </a>
                        </div>
                    </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/thanus.jpg">
                        <img src="/thanus.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                 </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/nidalee.jpg">
                        <img src="/nidalee.jpg" alt="Cinque Terre" />
                        </a>
                    </div>
                </div>
                <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/barco.jpg">
                        <img src="/barco.jpg" alt="Cinque Terre" />
                        </a>   
                    </div>
                </div>
                 <div className={styles.responsive}>
                    <div className={styles.gallery}>
                        <a target="_blank" href="/lobo.jpg">
                        <img src="/lobo.jpg" alt="Cinque Terre" />
                        </a>   
                    </div>
                </div>
                </div>   
        </div>
    )
}