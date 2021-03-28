

import { SideBar } from '../components/SideBar'
import styles from '../styles/pages/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
     <SideBar/>
    <div className={styles.main}>
      <h1 className={styles.title}>
        samot.draws
      </h1>
      <div className={styles.sobre}>

        <h2>Quem sou eu ?</h2>
          Desenho desde a minha infância, ficava muito empolgado 
          em desenhar os personagens de animes que eu via na TV. 
          Dragonball Z foi o anime que mais eu tentei desenhar os personagens, 
          e o que eu mais gostava também. No colégio sempre elogiavam os meus desenhos, 
          a mesma coisa em casa, mas eu sempre senti que tinha muito a melhorar 
          (e realmente tinha, sempre temos!). Eu nunca tive bons materiais de desenho, 
          folhas que só serviam pra impressão e rabiscar, lápis escolares e canetas comuns.
          Comecei a assistir vídeos no youtube  sobre como desenhar tal personagem, 
          como desenhar mãos, rostos e etc. Mas ainda assim não tinha uma evolução significativa,
          com 20 anos eu tive a oportunidade de adquirir um curso de desenho online,
          método fanart 2.0 e um material razoável para desenhar, pratiquei e estudei muito,
          com o tempo fui evoluindo e ficando cada vez mais satisfeito com meus desenhos.
          Continuo praticando e melhorando a cada dia, meu nome é Tomás e eu amo desenhar! 
      </div>

      <div className={styles.photo}>
        <img src="/FotoPerfil.jpg" alt=""/>
      </div>

      <div className={styles.contact}> 
        <p><strong>End:</strong> Salvador Bahia</p>
        <p><strong>Email:</strong> tomasjocalheiros@gmail.com</p>
        <p><strong>Fone:</strong> (71) 99168-6059</p>
      </div>
    </div>
    </div>
  )
}
