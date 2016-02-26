function fizzBuzz() {
    //bugfix
    var countValue = document.getElementById("countValue");
    var results = "";
    //bugfix
    for (i = 0; i <= countValue.value; i += 1) {
        results += i % 3 == 0 ? " FizzBuzz" : " " + i;
    }
    //bugfix
    document.getElementById("fizzBuzzData").innerHTML = results;
    return false;
    //bugfix
}