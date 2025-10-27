function Refresh() {
    document.getElementById("gen").innerHTML = "Statikus szöveg";
}

function Proba(x) {

    let y = " Doe";

    document.getElementById("gen").innerHTML = x + y;
}

function Proba2() {
    return "<br><b>Valamivel visszatértem</b>";
}

function Proba3(x) {
    return "<br><b>Valamivel visszatértem, de: " + x + "</b>";
}