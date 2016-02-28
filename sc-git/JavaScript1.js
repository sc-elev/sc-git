//function fizzBuzz() {

//    var countValue = document.getElementById("countValue");
//    var results = "";

//    for (i = 0; i <= countValue.value; i += 1) {
//        results += i % 3 == 0 ? " FizzBuzz" : " " + i;
//    }
//    document.getElementById("fizzBuzzData").innerHTML = results;
//    return false;
//}

function fizzBuzz() {
    var tal, text, noResult;

    tal = document.getElementById("textInput").value;

    document.getElementById("resultat").innerHTML = isFizzOrBuzz(tal);
}

function isFizzOrBuzz(tal) {
    var text = '';

    if (isNaN(tal) || tal < 1 || tal > 100) {
        text = "Talet " + tal + " är ej giltigt";
        return text;
    }

    if (tal % 3 == 0) {
        text = "FIZZ";
    }

    if (tal % 4 == 0) {
        text = text + "BUZZ";
    }

    if ((tal % 3 != 0) && (tal % 4 != 0)) {
        text = "Talet är ej jämt delbart";
    }
    return text;
}

function getFizzBuzzClass(tal) {
    var className = '';

    if (tal % 3 == 0) {
        className = "fizz";
    }

    if (tal % 4 == 0) {
        className = className + "buzz";
    }

    if ((tal % 3 != 0) && (tal % 4 != 0)) {
        className = "nonDivide";
    }
    return className;
}

function fizzBuzzList() {

    var color;
    var buf = "";
    var c = "";

    for (var i = 1; i < 101; i++) {
        c = getFizzBuzzClass(i);
        buf += "<dt class='nr " + c + "'>" + i + "</dt><dd class='beskr " + c + "'>" + isFizzOrBuzz(i) + "</dd>"
    }

    document.getElementById("list-resultat").innerHTML += buf;
}
