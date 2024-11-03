
function Projeto({nome, descricao, tecnologias, fase}) {

    return(
        <>
            <h3>Nome: {nome}</h3>
            <p>Descrição: {descricao}</p>
            <p>Tecnologias aplicadas: {tecnologias}</p>
            <p>Fase: {fase}</p>
            <br></br>
        </>
    )
}

export default Projeto