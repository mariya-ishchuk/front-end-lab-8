var n = Number(prompt("Enter a number from 1 to 20"));
var str = "";

if (n <= 0 || n > 20 || isNaN(n)) {
    console.error("Incorrect value.");
} else {
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < n - i; j++) {
            str = str + " " + " " + " ";
        }
        for (var x = 1; x <= (2 * i + 1); x++) {
            str = str + "[~]";
        }
        str = str + "\n";
    }
    console.log(str);
}