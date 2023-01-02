let selection_sort = (divs, div_sizes, enableButtons, delay_time, arsize) => {
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
  for (var i = 0; i < arsize - 1; i++) {
    div_update(divs[i], div_sizes[i], "red");
    let min_index = i;

    for (var j = i + 1; j < arsize; j++) {
      div_update(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] < div_sizes[min_index]) {
        if (min_index !== i) {
          div_update(divs[min_index], div_sizes[min_index], "blue");
        }

        min_index = j;
        div_update(divs[min_index], div_sizes[min_index], "red");
      } else {
        div_update(divs[j], div_sizes[j], "blue");
      }
    }
    if (min_index !== i) {
      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[min_index];
      div_sizes[min_index] = temp;

      div_update(divs[min_index], div_sizes[min_index], "red");
      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[min_index], div_sizes[min_index], "blue");
    }
    div_update(divs[i], div_sizes[i], "green");
  }
  div_update(divs[i], div_sizes[i], "green");

  // enable button for running another algo
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default selection_sort;
