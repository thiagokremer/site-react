import './Home.css'
import Usuario from '../components/Usuario'

function Home() {
    return(
        <>
            <h1>Usuarios</h1>

            <Usuario
                nome='Thiago'
                idade={39}
                peso={90}
                altura={1.80}
                profissao='Estoquista'
                habilidades='Html, Css, JavaScript'
            />

            <Usuario
                nome='Maria'
                idade={25}
                peso={80}
                altura={1.65}
                profissao='Enfermeira'
                habilidades='Medicina, Farmácia'
            />

        </>
    )
}

export default Home