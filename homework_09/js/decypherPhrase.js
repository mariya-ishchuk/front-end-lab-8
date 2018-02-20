function decypherPhrase(map, str) {
    var reversed = {};
    for(var key in map) {
        reversed[map[key]] = key;
    }
    return cypherPhrase(reversed, str)
}
decypherPhrase({a: "o", c: "d", t: "g"}, "kiggy dog" ); // -> kitty cat