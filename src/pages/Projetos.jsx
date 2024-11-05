import styles from './Projetos.module.css'
import Projeto from '../components/Projeto'

function Projetos() {

    return(
        <>
            <h1>Meus Projetos</h1>


            <Projeto
                nome='Por ai'
                descricao='Tentando fazer a atividade em aula'
                tecnologias='Git'
                fase='perdido'
            />

            <Projeto
                nome='Indo para algum ligar'
                descricao='Tentando ainda fazer alguma coisa da atividade'
                tecnologias='Herdeiro'
                fase='procurando'
            />

        </>
    )
}

export default Projetos