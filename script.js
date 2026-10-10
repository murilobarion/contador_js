let x = 0;

function aumentar() {
    x += 1
    document.getElementById("contador").textContent = x
}

function resetar() {
    x = 0
    document.getElementById("contador").textContent = x
}

function diminuir() {
    x -= 1
    document.getElementById("contador").textContent = x
}