

function numeros(valor) {
    document.getElementById("resultado").value += valor;    
}

function operacion() {
    var operatoria = document.getElementById("resultado").value;
    if (operatoria == 0) {
        document.getElementById('resultado').value = "Sin operación";
    } else {
        document.getElementById("resultado").value = eval(operatoria);
    }
}

function resetear() {
    document.getElementById("resultado").value = " ";
}



document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        operacion();
    }
});

