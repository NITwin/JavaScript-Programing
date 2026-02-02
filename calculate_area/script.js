function calculate(){
    const h = parseFloat(document.getElementById("height").value);
    const w = parseFloat(document.getElementById("width").value);
    const result = h*w
    document.getElementById("result").innerText=`A área do retângulo é de: ${result}`
}
