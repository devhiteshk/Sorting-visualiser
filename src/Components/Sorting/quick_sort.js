let quick_sort = (divs, div_sizes, enableButtons, delay_time, arsize) => {
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

  quick_sort(0, arsize - 1);

  function quick_sort(start, end) {
    if (start < end) {
      //stores the position of pivot element
      var piv_pos = quick_partition(start, end);
      quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
      quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
    }
  }

  function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start]; //make the first element as pivot element.
    div_update(divs[start], div_sizes[start], "yellow"); //Color update

    for (var j = start + 1; j <= end; j++) {
      //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
      if (div_sizes[j] < piv) {
        div_update(divs[j], div_sizes[j], "yellow"); //Color update

        div_update(divs[i], div_sizes[i], "red"); //Color update
        div_update(divs[j], div_sizes[j], "red"); //Color update

        var temp = div_sizes[i];
        div_sizes[i] = div_sizes[j];
        div_sizes[j] = temp;

        div_update(divs[i], div_sizes[i], "red"); //Height update
        div_update(divs[j], div_sizes[j], "red"); //Height update

        div_update(divs[i], div_sizes[i], "blue"); //Height update
        div_update(divs[j], div_sizes[j], "blue"); //Height update

        i += 1;
      }
    }
    div_update(divs[start], div_sizes[start], "red"); //Color update
    div_update(divs[i - 1], div_sizes[i - 1], "red"); //Color update

    temp = div_sizes[start]; //put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "red"); //Height update
    div_update(divs[i - 1], div_sizes[i - 1], "red"); //Height update

    for (var t = start; t <= i; t++) {
      div_update(divs[t], div_sizes[t], "green"); //Color update
    }

    return i - 1; //return the position of the pivot
  }

  // enable button for running another algo
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default quick_sort;
