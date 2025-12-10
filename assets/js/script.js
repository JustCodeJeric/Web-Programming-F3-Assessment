function replaceAll() {
    let str1 = document.getElementById("txtInput1").value;
    let newStr = str1.replaceAll(' ','');
    document.getElementById("txtResult1").innerHTML = newStr;
}

function countCharacters() {
    let str1 = document.getElementById("txtInput4").value;
    let trimmedStr = str1.trim();
    let charCount = trimmedStr.length;
    document.getElementById("txtResult4").innerHTML = charCount;
}
