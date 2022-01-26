
function showNum(num) {
    const valueInput = document.getElementById('field').value
    document.getElementById('field').value = valueInput + num
}

function deleteValue() {
    const valueImput = document.getElementById('field').value
    document.getElementById('field').value = ""
}

function calculate() {
    const valueInput = document.getElementById('field').value
    const value = document.getElementById('field')
    document.getElementById('field').value = eval(valueInput)
    value.style.animation = ""
    setTimeout(function() {value.style.animation = "anim 0.5s linear"}, 1);
}

function animImg() {
    const value = document.getElementById("image")
    value.style.animation = ""
    setTimeout(function() {value.style.animation = "animImg 0.3s linear"}, 1);
}
