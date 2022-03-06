let countA = 0;
function plusA() {
    countA++;
    document.getElementById('gpA').innerHTML = countA;
}
function moinsA() {
    countA--;
    document.getElementById('gpA').innerHTML = countA;
}
let countB = 0;
function moinsB() {
    countB--;
    document.getElementById('gpB').innerHTML = countB;
}

function plusB() {
    countB++;
    document.getElementById('gpB').innerHTML = countB;
}

let countC = 0;
function plusC() {
    countC++;
    document.getElementById('gpC').innerHTML = countC;
}

function moinsC() {
    countC--;
    document.getElementById('gpC').innerHTML = countC;
}

let countD = 0;
function plusD() {
    countD++;
    document.getElementById('gpD').innerHTML = countD;
}

function moinsD() {
    countD--;
    document.getElementById('gpD').innerHTML = countD;
}




const stagiaires = ['Abarkach Ibtissam', 'Abdellake Amina', 'Achakif Oumaima', 'Al Faker Hajar', 'Ballouki Oumaima','Boughinam Ahlam','Chaari Hamza','El Abbas Youness','El Bardiai Ibtissam','El Hadifi Zaid' ,'El Ouahdi Achraf','Ghadioui Iliass', 'Hadouch Achraf','Koubaa Yousra','Laachouri Yasmin', 'Ouissa Imane', 'Rifaat Ouiam', 'Seddiki SalahEddine', 'Zibuh Anass'];

function winner() {
    let length = stagiaires.length;
    const winner = stagiaires[Math.floor(Math.random() * length)];
    document.getElementById('res').innerHTML = winner;
}