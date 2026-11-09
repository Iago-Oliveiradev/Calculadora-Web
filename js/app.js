let visor = document.getElementById("visor")
let botoes = document.querySelector(".botoes")

let primeiroNum = null;
let operacao = null;
let segundoNum = null;
let resultado = null;

botoes.addEventListener('click', (event) => {
    let tecla = event.target

    // Ação ao apertar DEL e retirar último número
    if(tecla.textContent == "DEL"){
        visor.value = visor.value.slice(0, -1)
    }

    // Ação ao apertar CE e limpar o visor
    else if(tecla.textContent == "CE"){
        visor.value = ""
        primeiroNum = null;
        operacao = null;
        segundoNum = null;
        resultado = null;
    }

    else if(tecla.classList.contains("operador")){
        if(visor.value == "") return;

        primeiroNum = Number(visor.value)
        visor.value = ""
        operacao = tecla.textContent
    }

    else if(tecla.classList.contains("igual")){
        if(visor.value == "" || primeiroNum === null || operacao === null){
            visor.value = "Faltam informações"
        } else{
            segundoNum = Number(visor.value)

            switch(operacao){
                case "+":
                    resultado = primeiroNum + segundoNum
                break

                case "-":
                    resultado = primeiroNum - segundoNum
                break

                case "/":
                    // Checa divisão por zero
                    if(segundoNum == 0){
                        resultado = "Erro: divisão por 0"
                    } else{
                        resultado = primeiroNum / segundoNum
                    }
                break

                case "*":
                    resultado = primeiroNum * segundoNum
                break
            }

            visor.value = resultado

            primeiroNum = null;
            operacao = null;
            segundoNum = null;
        }
    }

    else if(tecla.classList.contains("tecla")){

        // Verifica se o usuário inseriu mais de um "."
        if(tecla.textContent == "." && visor.value.includes(".")){
            return;
        }

        // Adiciona o número
        visor.value += tecla.textContent
    }
})