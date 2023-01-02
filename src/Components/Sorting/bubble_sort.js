let bubble_sort = (divs, div_sizes, enableButtons, delay_time, arsize) => {
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

  // bubble sort algorithm
  for (var i = 0; i < arsize - 1; i++) {
    for (var j = 0; j < arsize - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] > div_sizes[j + 1]) {
        //if current is greater that next
        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");
      }
      div_update(divs[j], div_sizes[j], "blue");
    }
    // last element is sorted
    div_update(divs[j], div_sizes[j], "green");
  }
  // update first element color to green :)
  div_update(divs[0], div_sizes[0], "green");

  // enable button for running another algo
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default bubble_sort;
