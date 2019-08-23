$(document).ready(function(){
    $.get( "http://localhost:3003/", function(data) {
        
        for(let i=0; i<data.length; i++)
        {
            document.getElementById("lista").innerHTML += `Nome:
    ${data[i].nome} `
             document.getElementById("lista").innerHTML += `Matricula:    
     ${data[i].matricula} `
             document.getElementById("lista").innerHTML += `Situacao do Curso:
     ${data[i].situacao} `
            document.getElementById("lista").innerHTML += `Cota:
    ${data[i].cota} <br>` // para filtar e imprimir nome tem que criar vetor e laço de repetição.
    }
  });
});