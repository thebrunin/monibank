export default function ehUmCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(temNumerosRepetidos(cpf) ||
    validaPrimeiroDigito(cpf) ||
    validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é valido');
    } 
}

function temNumerosRepetidos(cpf) {
    var numerosRepetidos = true;
    for(let i = 1; i < cpf.length; i++){
        cpf[i -1] == cpf[i] ? numerosRepetidos : numerosRepetidos = false;
        if(!numerosRepetidos){
            return numerosRepetidos;
        }
    }
    return numerosRepetidos;
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
    for(let tam = 0; tam < 9; tam++) {
        soma += cpf[tam] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
    for(let tam = 0; tam < 10; tam++) {
        soma += cpf[tam] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[10];
}