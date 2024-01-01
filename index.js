const fun = () => {
  for (var i = 0; i < 3; i++) {
    (function (e) {
      setTimeout(() => {
        console.log(e);
      }, 1000);
    })(i);
  }
};

fun();
