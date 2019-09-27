function Pessoa(){
    this.idade = 0

    /* Sem arrow function => utilização da const self 

    const self = this
    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    },1000)*/

    /* Utilizando a função arrow => utilização do this*/

    setInterval(()=>{
        this.idade++
        console.log(idade)
    },1000)


}

new Pessoa
