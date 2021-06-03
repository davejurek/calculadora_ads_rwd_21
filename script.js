function limpar(){
    document.getElementById('tela-visor').value = '';
}

function unir(valor){
    document.getElementById('tela-visor').value += valor;
}

function calcular(){
    var resultado = 0;
    resultado = document.getElementById('tela-visor').value;
    document.getElementById('tela-visor').value = eval(resultado);
}