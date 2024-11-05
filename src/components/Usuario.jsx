import styles from './Usuario.module.css'

function Usuario({nome, idade, peso, altura, profissao, habilidades}) {

    const imc = (peso / (altura**2)).toFixed(2)

    return(
        <>
            <h3 className={styles.nome}>Nome: {nome}</h3>
            <p className={styles.idade}>Idade: {idade}</p>
            <p className={styles.peso_altura}>Peso: {peso} - altura: {altura}</p>
            <p className={styles.peso_altura} >IMC: {imc}</p>
            <p className={styles.profissao}>profissão: {profissao}</p>
            <p className={styles.habilidades}>Habilidades: {habilidades}</p>
            <br></br>
        </>
    )
}

export default Usuario