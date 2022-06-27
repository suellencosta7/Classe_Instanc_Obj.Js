// NOTAÇÃO LITERAL com função construtora

var Pessoa = function(){ //Classe definida
    this.nome=""         //Propriedades (Variáveis)
    this.telefone=""    //Declarar propriedade com o this, limita com que a variável receba um determinado valor nesta chamada      
    this.email=""
    this.data_nasci=""
    this.Falar=function(){ //Método (Função)
        alert(`Nome: ${this.nome}`); 
        alert(`Telefone: ${this.telefone}`);
        alert(`Email: ${this.email}`);
    } 
}

var p= new Pessoa() /* Instânciando : Criando um novo objeto (PALAVRA CHCAVE 'new') a partir do modelo já definido.
                         Objeto é chamada da classe permitindo a inserção de valores.   
                     Neste caso,'p' recebe todas as propriedades definidas da Classe Pessoa */

//Prenchendo dados

p.nome='Suellen'
p.telefone='(DD) 9 9999-9999'
p.email='suellencostasilva@outlook.com'
p.data_nasci='21/12/1998'

console.log(p) // Chamada para printar no terminal (Node.js) 
