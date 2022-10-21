const el = document.querySelector("#text");
const text = "Codificando Mensagem";
const interval = 200;

function showText(el, text, interval) {
    const char = text.split("").reverse();
    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();
        el.innerHTML += next;
    }, interval);

}
showText(el, text, interval);




function abrir(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'Block';

}

function fechar(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';

}


var seletor = document.querySelector("select");
var addContainer = document.getElementById("divCifra");
var texto = document.getElementById("mensagem1");
var txtResultado = document.getElementById("mensagem2");
var radioCode = document.getElementById("codificar");
var radioDecode = document.getElementById("decodificar");
var btnCodificar = document.getElementById("btn-codificar");


//função para que a div só apareça quando a opção Cifra for escolhida//
seletor.addEventListener("change", function(event) {

    if (event.target.value == "cifraCesar") {

        addContainer.style = "display: block";

    } else {

        addContainer.style = "display: none";
    }

});

//mudar o nome do botão "confirmar"//
radioCode.addEventListener("click", function() {
    btnCodificar.innerText = "Codificar Mensagem";
});

radioDecode.addEventListener("click", function() {
    btnCodificar.innerText = "Decodificar Mensagem";
});


// chave/incremento //
var chave = document.querySelector("#chave");

btnCodificar.addEventListener("click", function() {

    if (radioCode.checked && seletor.value == "cifraCesar") {
        txtResultado.value = cifra(parseInt(chave.value), texto.value);

    } else if (radioCode.checked && seletor.value == "base.64") {
        txtResultado.value = codeBase64(texto.value);

    } else if (radioDecode.checked && seletor.value == "cifraCesar") {
        txtResultado.value = decifra(parseInt(chave.value), texto.value);

    } else if (radioDecode.checked && seletor.value == "base.64") {
        txtResultado.value = decoBase64(texto.value);

    }
});

//criptografada cifra de cesar//

function cifra(chave, texto) {

    var textoCodificado = "";
    var codigo = 0;

    for (var i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
            codigo = (((texto.charCodeAt(i) - 65) + chave) % 26) + 65;
        } else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
            codigo = (((texto.charCodeAt(i) - 97) + chave) % 26) + 97;
        } else if (texto.charCodeAt(i) == 32) {
            codigo = 32;
        }
        textoCodificado += String.fromCharCode(codigo);
    }

    return textoCodificado;
}

//Descriptografar cifra de cesar//

function decifra(chave, texto) {
    var textoCodificado = "";
    var codigo = 0;

    for (var i = 0; i < texto.length; i++) {

        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
            if ((texto.charCodeAt(i) - 65) - chave < 0) {
                codigo = (((texto.charCodeAt(i) - 65) - chave + 26) % 26) + 65;
            } else {
                codigo = (((texto.charCodeAt(i) - 65) - chave) % 26) + 65;
            }

        } else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
            if ((texto.charCodeAt(i) - 97) - chave < 0) {
                codigo = (((texto.charCodeAt(i) - 97) - chave + 26) % 26) + 97;
            } else {
                codigo = (((texto.charCodeAt(i) - 97) - chave) % 26) + 97;
            }

        } else if (texto.charCodeAt(i) == 32) {
            codigo = 32;
        }
        textoCodificado += String.fromCharCode(codigo);
    }
    return textoCodificado;
}


//codificar base64// 
function codeBase64(texto) {
    return btoa(texto);
}
//decodificar base64//

function decoBase64(texto) {
    return atob(texto);
}