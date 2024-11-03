import './Home.css'
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

        </>
    )
}

export default Projetos