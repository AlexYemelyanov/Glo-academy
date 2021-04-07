let arr = ['244', '1000', '4000', '6424', '2543', '5014214', '4241235'];
//
arr.forEach(function (i) {
  if (i.startsWith('2') || i.startsWith('4')) {
    console.log(i);
  };
});

simpleNum:
  for (i = 2; i <= 100; i++) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) continue simpleNum;
    };
    console.log(i + ' Делитель этого чилсла: 1 и ' + i);
  };