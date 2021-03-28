import styles from '../styles/components/SideBar.module.css'
import Link from 'next/link'
export function SideBar () {
    return (
    <div className={styles.conatiner}>
        <div className={styles.sideBar}>
            <Link href="/"> 
                <a>Home</a>  
            </Link>
            
             <Link href="/dragonball"> 
                <a>Dragonball</a>  
            </Link>

            <Link href="/bleach"> 
                <a>Bleach</a>  
            </Link>

            <Link href="/naruto"> 
                <a>Naruto</a>  
            </Link>

             <Link href="/outros"> 
                <a>Outros</a>  
            </Link>
        
        </div>          
    </div>
    )
}