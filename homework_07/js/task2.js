var wantPlay = true
var prize = 0;
var attempt = 1;
var firstTimePrize = 10;
var secondTimePrize = 5;
var thirdTimePrize = 2;

while (wantPlay) {
    wantPlay = confirm("Do you want to play a game?");
    if (wantPlay === false) {
        console.log("You did not become a millionaire");
    } else {
        var random = Math.floor(Math.random() * (5 * attempt) + 1);
        for (var i = 0; i < 3; i ++) {
            if (random === Number(prompt("Enter number in range 0-5"))) {
                if (i === 0) {
                    prize += firstTimePrize;
                    console.log("You guessed number on 1-st attempt! Your prize is 10$ - maximum prize for current numbers range");
                } else if (i === 1) {
                    prize += secondTimePrize;
                    console.log ("You guessed number on 2-nd attempt! Your prize is 5$");
                } else {
                    prize += thirdTimePrize;
                    console.log ("You guessed number on 3-rd attempt! Your prize is 2$");
                }
                break;
            } else {
                firstTimePrize = Math.floor(firstTimePrize / 2);
                secondTimePrize = Math.floor(secondTimePrize / 2);
                thirdTimePrize = Math.floor(thirdTimePrize / 2);
                console.log ("Thank you for a game. Your prize is: " + prize + "$");
            }
        }
    }
    attempt++;
    firstTimePrize = firstTimePrize * 3;
    secondTimePrize = secondTimePrize * 3;
    thirdTimePrize = thirdTimePrize * 3;
}