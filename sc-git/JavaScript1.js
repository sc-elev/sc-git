function fizzBuzz() {

    var countValue = document.getElementById("countValue");
    var results = "";

    for (i=1; i <= countValue.value; i++) {
        results += i % 3 == 0 ? " FizzBuzz" : " " + i;
    }
    document.getElementById("fizzBuzzData").innerHTML = results;
    return false;
}

// Adding a silly comment
// Now changed
