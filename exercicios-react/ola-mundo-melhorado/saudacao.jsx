function Saudacao(props) {
    //CRIANDO OS DADOS DA PROPS
    const nome = props.nome;
    const horario = props.horario;
    //VERIFICANDO PERÍODO
    let mensagem;
    if(horario === "manhã") {
        mensagem = "Bom dia";
    } else if (horario === "tarde") {
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }
    //RETORNANDO VALORES DE ACORDO COM OS DADOS EM UMA MENSAGEM
    return (
        <h3>{mensagem}, {nome}!</h3>
    )
}

export default Saudacao;