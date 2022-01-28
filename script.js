
function showNum(num) {
    const valueInput = document.getElementById('field').value
    document.getElementById('field').value = valueInput + num
}

function deleteValue() {
    const valueInput = document.getElementById('field').value
    const result = valueInput.substr(0, valueInput.length - 1)
    document.getElementById('field').value = result
}

function calculate() {
    const valueInput = document.getElementById('field').value
    const value = document.getElementById('field')
    if (valueInput === "", "Nada digitado:(") {
        document.getElementById('field').value = "Nada digitado:("
    } else {
        document.getElementById('field').value = eval(valueInput)
    }
    value.style.animation = ""
    setTimeout(function() {value.style.animation = "anim 0.5s linear"}, 1);
}

function animImg() {
    const value = document.getElementById("image")
    value.style.animation = ""
    setTimeout(function() {value.style.animation = "animImg 0.3s linear"}, 1);
    document.getElementById('field').value = ""
}

function help() {
    document.getElementById('pag_help').style.display = "block"
}

function ocult() {
    document.getElementById('pag_help').style.display = "none"
}
