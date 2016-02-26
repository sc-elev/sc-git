function fizzBuzz() {

    var countValue = document.getElementById("countValue");
    var results = "";

    for (j = 0; j <= countValue.value; j += 1) {
        results += j % 3 == 0 ? " FizzBuzz" : " " + j;
    }
    document.getElementById("fizzBuzzData").innerHTML = results;
    return false;
}

// Adding a silly comment
