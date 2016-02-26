function fizzBuzz() {

    var countValue = document.getElementById("countValue");
    var results = "";

    for (i= 0; .j <= countValue.value; .j += 1) {
        results += i % 3 == 0 ? " FizzBuzz" : " " + i;
    }
    document.getElementById("fizzBuzzData").innerHTML = results;
    return false;
}

// Adding a silly comment
