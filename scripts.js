function lottoWhiteBalls() {
  var lottoNums = [];
  for (var i = 0; i < 5; i++) {
    var temp = Math.floor(Math.random() * 70);
    if (lottoNums.indexOf(temp) == -1) {
      lottoNums.push(temp);
      document.getElementById('whiteBall' + i).innerHTML = lottoNums[i];
    } else {
      i--;
    }
  }
}

function lottoMegaBall() {
  document.getElementById('megaBall').innerHTML = Math.floor(Math.random() * 25) + 1;
}

function lottoNumbers() {
  lottoWhiteBalls();
  lottoMegaBall();
}

// let megaBall = document.getElementById('megaBall');
// let whiteBall = document.querySelectorAll('num5');
// megaBall.style.fontSize = '30px';
// megaBall.style.fontFamily = 'Ultra';
// megaBall.style.padding = '5px';
//
// whiteBall.style.fontFamily = 'Ultra';
