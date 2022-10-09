function getText(text, colorIndex) {
    return "<span class=\"c" + colorIndex + "\">" + text + "</span>";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

window.onload = function () {
    var div = document.getElementById("bgtext");
    var h1 = document.getElementById("heading").getElementsByTagName("h1")[0];
    const text = document.getElementById("textvalue").value;
    const totalColors = 6;
    //console.log(div);
    h1.innerText = text;
    var color = 0;
    for (var j = 0; j < 30; ++j) {
        color = getRandomInt(0, totalColors);
        if (j % 2 == 1) {
            div.innerHTML += getText(text.substring(text.length / 3), color++ % totalColors);
            startColor = 1;
        }
        for (var i = 0; i < 30; ++i) {
            div.innerHTML += getText(text, color++ % totalColors);
            //console.log(div.clientHeight);
        }
        div.innerHTML += "<br>";
    }
}