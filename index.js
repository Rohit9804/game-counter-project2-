let hello1 = document.getElementById("hello")
result = 0
    function add() {
         result = result + 1
        hello1.textContent =  + result
}
    function add2() {
         result = result + 2
        hello1.textContent =  + result
}
function add3() {
    result = result + 3
   hello1.textContent =  + result
}


let hello2 = document.getElementById("hello2")
result2= 0
    function add21() {
         result2 = result2 + 1
        hello2.textContent =  + result2
}
function add22() {
    result2 = result2 + 2
   hello2.textContent =  + result2
}
function add23() {
    result2 = result2 + 3
   hello2.textContent =  + result2
}

function reset() {
    hello2.textContent = 0
    hello1.textContent = 0
    result = 0
    result2 = 0 
}