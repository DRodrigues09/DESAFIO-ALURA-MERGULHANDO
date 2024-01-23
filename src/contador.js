alert('Boas vindas ao jogo do número secreto!')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual a n.s
while (chute != numeroSecreto ) {
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);
    //se chute for igual a n.s
    if (chute == numeroSecreto) {
        break;
    }
     else {
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
