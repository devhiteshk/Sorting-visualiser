let insertion_sort = (divs, div_sizes, enableButtons, delay_time, arsize) => {
  let c_delay = 0;

  // update the height and color of div -> set timeout to slowdown algo
  function div_update(div, height, color) {
    window.setTimeout(function () {
      div.style =
        "margin:0 1px;" +
        "background-color:" +
        color +
        ";" +
        "width:" +
        100 / (arsize - 2 * 0.1) +
        "%; height:" +
        height * 0.8 +
        "%;";
    }, (c_delay += delay_time));
  }

  // selection sort algorithm
  for (var j = 0; j < arsize; j++) {
    div_update(divs[j], div_sizes[j], "yellow");

    var key = div_sizes[j];
    var i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[i + 1], div_sizes[i + 1], "red");

      div_sizes[i + 1] = div_sizes[i];

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[i + 1], div_sizes[i + 1], "red");
      if (i === j - 1) {
        div_update(divs[i + 1], div_sizes[i + 1], "yellow");
      } else {
        div_update(divs[i + 1], div_sizes[i + 1], "blue");
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;
    for (var k = 0; k < j; k++) {
      div_update(divs[k], div_sizes[k], "green");
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "green");
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default insertion_sort;
