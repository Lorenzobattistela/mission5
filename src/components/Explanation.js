export default function Explanation(){
    return (
        <div className="explanation">
            <h1 className="title text title-main">Experimento MELK - Missão 5</h1>
            <p className="text">O experimento de $MELK tem por objetivo trazer milhares de pessoas para o novo mundo web3, sendo o primeiro token Learn-to-Earn (aprenda para ganhar) do Brasil.
            Com esse experimento, você irá aprender e ganhar tokens ao mesmo tempo. O objetivo principal do token $MELK é tornar a web3 uma realidade e para isso precisamos trazer o maior número de pessoas para esse mundo. Neste experimento vamos ensinar qualquer pessoa a participar do mundo web3, aprender o que é uma DAO e até aprender a ganhar dinheiro trabalhando remotamente, de forma livre para uma DAO.

            Esse modelo é chamado de Learn-to-earn em inglês, que significa, “aprender para ganhar”. É um modelo inovador de ensino que surgiu com o advento das criptomoedas. No Brasil ele ainda não é disseminado e eu acredito que o token $MELK seja o primeiro token brasileiro Learn-to-earn.

            Para mais informações, acesse o <a target="_blank" href="https://melk.gitbook.io/aprenda-e-ganhe/aprender-e-ganhar">link do experimento MELK.</a>
            </p>
            <h2 className="text title" >Missão 5</h2>
            <p className="text" >Como explicado no <a target="_blank" href="https://melk.gitbook.io/aprenda-e-ganhe/missoes/missao-5">gitbook</a>, nessa missão vamos executar a assinatura de uma transação.
            É importante destacar que essa transação <strong>não tem custo financeiro</strong>, já que assinar transações não consome gas.
            Para a execução dessa missão, você precisará clicar no botão abaixo. Esse botão abrirá a extensão de navegador da MetaMask, pedindo a senha de desbloqueio. Essa senha não é armazenada e nem pode ser acessada por nós, e o desbloqueio da conta conectará a carteira com o nosso site, que por sua vez poderá acessar <strong>apenas o endereço e o saldo</strong> da carteira. 
            Após inserir a senha, o MetaMask mostrará uma tela com um botão de assinar a mensagem "Experimento MELK" e um botão para assinar. 
            Ao clicar no botão de assinar, o site utilizará o endereço público da sua carteira e a mensagem para produzir um hash de assinatura único, que comprovará que o seu endereço assinou a mensagem. O hash único será a prova da missão 5.</p>
        </div>
    )
}

