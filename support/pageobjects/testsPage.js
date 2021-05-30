///<reference types="Cypress" />

//import {} from 'cypress/types/jquery'
//import { data, type } from 'cypress/types/jquery'
import testsElements from '../elementos/testsElements'
const testselements = new testsElements
const url = Cypress.config("baseUrl")

class TestPage  {
   acessarSite() {
       cy.visit(url)
       cy.wait(4000)
    }
   
   inserirNome(){
      cy.get(testselements.campoNome()).type('Luciano'),
      cy.get(testselements.campoSobrenome()).type('Xavier'),
      cy.wait(3000)
   }

   inserirEndereco(){
      cy.get(testselements.campoEndereco()).type('Rua Nicia Coutinho  Nº 40')
      cy.screenshot()
   }

   inserirEmail(){
       cy.get(testselements.campoEmail()).type('lu99_xavier@hotmail.com')
       cy.screenshot()
   }

   inserirTelefone(){
      cy.get(testselements.campoTelefone()).type ('926983940')
      cy.screenshot()
   }
    
   inserirGenero(){
      cy.get(testselements.campoGenero()).click()
      cy.screenshot()

   }
   
   inserirHobbis(){
      cy.get(testselements.campoHobbis()).click()
      cy.screenshot()
   }

   inserirLingua(){
       cy.get(testselements.campoLingua()).click()
       cy.get(testselements.campoLinguaPortuguese()).click()
       cy.screenshot()
   }

   inserirHabilidades(){
       cy.get(testselements.campoHabilidades()).select('AutoCAD')
       cy.screenshot()   
   }

   inserirPais(){
      cy.get(testselements.campoPais()).select('Brazil')
      }

   inserirSelecionarPais(){
      cy.get(testselements.campoSelecionarPais()).click()
      cy.get(testselements.campoSelecionarPaisJapan()).click()
   }

   inserirDataNascimento(){
      cy.get(testselements.campoDataNascimento()).click()
      cy.get(testselements.campoData()).select('23'),
      cy.get(testselements.campoMes()).select('August'),
      cy.get(testselements.campoAno()).select('1982'),
      cy.wait(2000)
      
   }

  inserirSenha(){
     cy.get(testselements.campoSenha()).type('12345')
     cy.screenshot()
   }

   inserirConfirmarSenha(){
      cy.get(testselements.campoConfimarSenha()).type('12345')
      cy.screenshot()
   }

   clicarReflesh (){
      cy.get(testselements.botaoReflesh()).click()
      cy.screenshot()
   }

   validar(){
   cy.get(testselements.validarTitulo()).contains('Automation Demo Site')
   cy.screenshot()
}

 }
  export default TestPage;