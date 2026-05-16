function corrigirProva(){

    let respostasCorretas = {

        q1: "A",
        q2: "B",
        q3: "C",
        q4: "B",
        q5: "B",
        q6: "A",
        q7: "A",
        q8: "B",
        q9: "B",
        q10: "B"

    };

    let acertos = 0;

    for(let questao in respostasCorretas){

        let respostaMarcada = document.querySelector(`input[name="${questao}"]:checked`);

        if(respostaMarcada){

            let resposta = respostaMarcada.value;

            if(resposta === respostasCorretas[questao]){

                acertos++;

            }

        }

    }

    document.getElementById("resultadoFinal").innerHTML =

    `
        <h2>Resultado Final</h2>

        <p>Você acertou ${acertos} de 10 questões.</p>

        <p>Nota: ${acertos}</p>
    `;
}