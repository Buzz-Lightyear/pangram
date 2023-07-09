function main() {
    word = pick_word()
    jumbled_word = scramble(word)
}

function pick_word() {
    // Need to read resources/words_alpha.txt to pick one with L == 9
    return "tenacious";
}

function scramble(word) {
    strarray = word.split('');
    var i,j,k
    for (i = 0; i < strarray.length; i++) {
      j = Math.floor(Math.random() * i)
      k = strarray[i]
      strarray[i] = strarray[j]
      strarray[j] = k
    }
    word = strarray.join('');
    return word;
}

function search(ele) {
    if(event.key === 'Enter' && ele.value === 'clawing') {
        alert("Congrats, you got the pangram!");
        ele.value = '';
    }
}

main()