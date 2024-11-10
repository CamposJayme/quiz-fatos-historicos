import inputDados from 'readline-sync';

const questoes = [
    { id: 1, pergunta: 'Quando aconteceu o atentado as Torres Gêmeas', resposta: '2001'},
    { id: 2, pergunta: 'Em que ano foi detectado o primeiro paciente com coronavírus?', resposta: '2019'},
    { id: 3, pergunta: 'Em que ano Steve Jobs apresentou o primeiro iPhone sem teclas?', resposta: '2007'},
    { id: 4, pergunta: 'Qual o ano da morte de Stan Lee?', resposta: '2018'},
    { id: 5, pergunta: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', resposta: '1994'},
    { id: 6, pergunta: 'O primeiro lançamento de foguete da SpaceX ocorreu em?', resposta: '2017'},
    { id: 7, pergunta: 'Em que ano foi apresentado o primeiro computador eletrônico?', resposta: '1946'},
    { id: 8, pergunta: 'Em que ano ocorreu a Revolução Francesa?', resposta: '1789'},
    { id: 9, pergunta: 'Em que ano começou a Primeira Guerra Mundial?', resposta: '1914'},
    { id: 10, pergunta: 'Em que ano terminou a Segunda Guerra Mundial?', resposta: '1945'},
]

console.log('-------- QUIZ DE FATOS HISTÓRICOS --------');
console.log('\n');

const nomeJogador = inputDados.question('Digite o seu nome: ');
