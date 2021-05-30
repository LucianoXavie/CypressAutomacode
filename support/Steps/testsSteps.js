/* global Give, Then, When */

import TestPage from '../pageobjects/testsPage'
const Pagetest =  new TestPage



Given("Que eu acesso a tela principal", () =>{
     Pagetest.acessarSite()
})

Then("Inserir Informacoes para Registro", () => {
    Pagetest.inserirNome(),
    Pagetest.inserirEndereco(),
    Pagetest.inserirEmail(),
    Pagetest.inserirTelefone(),
    Pagetest.inserirLingua(),
    Pagetest.inserirGenero(),
    Pagetest.inserirHobbis(),
    Pagetest.inserirHabilidades(),
    Pagetest.inserirPais(),
    Pagetest.inserirSelecionarPais(),
    Pagetest.inserirDataNascimento(),
    Pagetest.inserirSenha(),
    Pagetest.inserirConfirmarSenha() 
    
   
} )

And ("clico em reflesh", ()=> {
     Pagetest.clicarReflesh()
})

When("Validar", () =>{
    Pagetest.validar()

})

