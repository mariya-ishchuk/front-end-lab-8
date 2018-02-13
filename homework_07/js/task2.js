var wantPlay = true;
var bank = 0;
var maxRange = 5;
var prize = 10;
var localPrize;
var random;
var i;

while (wantPlay) {
    wantPlay = confirm("Do you want to play a game?");
    if (wantPlay === false) {
        console.log("You did not become a millionaire");
    } else {
        random = Math.floor(Math.random() * (maxRange + 1));
        localPrize = prize;
        for (i = 3; i > 0; i = i - 1) {
            if (random === Number(prompt("Enter number in range 0-" + maxRange + "\n Attempts left: " + i + "\n Total prize: " + bank + "$\n Total prize on current attempt: " + localPrize + "$"))) {
                if (i === 3) {
                    console.log("You guessed number on 1-st attempt! Your prize is 10$ - maximum prize for current numbers range");
                } else if (i === 2) {
                    console.log("You guessed number on 2-nd attempt! Your prize is 5$");
                } else {
                    console.log("You guessed number on 3-rd attempt! Your prize is 2$");
                }
                bank += localPrize;
                maxRange *= 2;
                prize *= 3;
                break;
            } else {
                console.log("Thank you for a game. Your prize is: " + bank + "$");
                if (i === 1) {
                    bank = 0;
                    maxRange = 5;
                    prize = 10;
                }
            }
            localPrize = Math.floor(localPrize / 2);
        }
    }
}