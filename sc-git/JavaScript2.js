function fizzBuzz() {

    var countValue = document.getElementById("countValue");
    var results = "";

    for (i = 0; i <= countValue.value; i += 1) 
    {
    	results = results + i +": ";
    	if (i%3==0)
    	{
    		results = results + "Fizz";
    	}
    	if (i%4==0)
    	{
    		results = results + "Buzz";
    	}
    	results = results + "</br>";
//        results += i % 3 == 0 ? " FizzBuzz" : " " + i;
//skräp
    }
    document.getElementById("fizzBuzzData").innerHTML = results;
    return false;
}