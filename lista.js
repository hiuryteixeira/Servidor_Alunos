const url = 'https://dados.ifpb.edu.br/dataset/d02eb6b8-5745-4436-ae22-ef1c182897d9/resource/61f5a0ad-642d-4580-ab62-1110318d0eea/download/alunos.json'
const axios = require('axios')

const curso = f => f.situacao === 'Conclu\u00eddo' // filtar por contador
//const scota = f => f.cota === 'null' // O IGUAL E EXATAMENTE IGUAL  FILTRA APOSENTADO
//const numero = f => f.matricula === '201917520039' // O IGUAL E EXATAMENTE IGUAL  FILTRA APOSENTADO




axios.get(url).then(resposta => {
    const servidores = resposta.data
    module.exports.resultado =
    servidores.filter(curso)

    const resultado_filtro = servidores.filter(curso)//.filter(numero)
    //console.log(resultado_filtro)
})