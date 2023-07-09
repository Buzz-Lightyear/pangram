function start_game() {
    word = pick_word()
    jumbled_word = scramble(word)
    populate_grid(jumbled_word);
}

function populate_grid(word) {
    window.onload = function () {
        document.getElementById("letter1").innerHTML = word[0];
        document.getElementById("letter2").innerHTML = word[1];
        document.getElementById("letter3").innerHTML = word[2];
        document.getElementById("letter4").innerHTML = word[3];
        document.getElementById("letter5").innerHTML = word[4];
        document.getElementById("letter6").innerHTML = word[5];
        document.getElementById("letter7").innerHTML = word[6];
        document.getElementById("letter8").innerHTML = word[7];
        document.getElementById("letter9").innerHTML = word[8];
    };
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

function check_answer(ele) {
    if(event.key === 'Enter' && ele.value === 'clawing') {
        alert("Congrats, you got the pangram!");
        ele.value = '';
    }
}

start_game()