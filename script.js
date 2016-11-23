function lottery(qty) {

    var numbers = []
    //empty array

    //loop to get 6 numbers
    for (var i = 0; i < qty;) {
        //generate random number into variable
        number = Math.floor(Math.random() * (49)) + 1;
        console.log(number);
        if (numbers.indexOf(number) === -1){
        //check if number exists
            numbers.push(number)
            //add number to array
            console.log("unique");
            //console logging number to check for unque value
        i++
        //increment for counter
      }
        else {
          console.log("notunique");
          //console logging number to check for unque value
        }
    }

    // javascript number sort
    numbers.sort(function(a, b) {
        return a - b
    });

    //return the array to the div#lottery
    document.getElementById('lotteryNumbers').innerHTML = numbers;
}
