function cypherPhrase(map, str) {

    return (getTransformedArray(str, function(el) {
        return map[el] || el;
    })).join('');
}
cypherPhrase({a: "o", c: "d", t: "g"}, "kitty cat" ); // -> “kiggy dog”