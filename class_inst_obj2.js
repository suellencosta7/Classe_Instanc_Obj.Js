// Função construtora

function Pessoa (nome,telefone,email,data_nasci){     //Classe (MOLDE) definida com 5 paramertros declarados. 
                
        this.nome= nome          //Propriedades nome,telefone (Variáveis)
        this.telefone= telefone  //Declarar propriedade com o this, limita com que a variável receba um determinado valor nesta chamada      
        this.email= email
        this.data_nasci= data_nasci
        this.Falar=function(){ //Método (Função) visível apenas no navegador
            alert(`Nome: ${this.nome}`); 
            alert(`Telefone: ${this.telefone}`);
            alert(`Email: ${this.email}`);
        } 
}

var pessoa1 = new Pessoa(); // Instânciando (Criando um novo objeto a partir da CLASSE Pessoa. Ou seja, pessoa1 é uma copia de Pessoa.

//Passando valores p/ o objeto

var pessoa1 = new Pessoa('Suellen','(DD) 9 9999-9999','suellencostasilva@outlook.com','21/12/1998') // Dados inseridos na ordem

console.log(pessoa1) // Output Node.Js


