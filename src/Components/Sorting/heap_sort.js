let heap_sorting = (divs, div_sizes, enableButtons, delay_time, arsize) => {
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

  heap_sort();

  function max_heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && div_sizes[l] > div_sizes[largest]) {
      if (largest !== i) {
        div_update(divs[largest], div_sizes[largest], "blue"); //Color update
      }

      largest = l;

      div_update(divs[largest], div_sizes[largest], "red"); //Color update
    }

    if (r < n && div_sizes[r] > div_sizes[largest]) {
      if (largest !== i) {
        div_update(divs[largest], div_sizes[largest], "blue"); //Color update
      }

      largest = r;

      div_update(divs[largest], div_sizes[largest], "red"); //Color update
    }

    if (largest !== i) {
      swap(i, largest);

      max_heapify(n, largest);
    }
  }

  function swap(i, j) {
    div_update(divs[i], div_sizes[i], "red"); //Color update
    div_update(divs[j], div_sizes[j], "red"); //Color update

    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "red"); //Height update
    div_update(divs[j], div_sizes[j], "red"); //Height update

    div_update(divs[i], div_sizes[i], "blue"); //Color update
    div_update(divs[j], div_sizes[j], "blue"); //Color update
  }

  function heap_sort() {
    for (var i = Math.floor(arsize / 2) - 1; i >= 0; i--) {
      max_heapify(arsize, i);
    }

    for (i = arsize - 1; i > 0; i--) {
      swap(0, i);
      div_update(divs[i], div_sizes[i], "green"); //Color update
      div_update(divs[i], div_sizes[i], "yellow"); //Color update

      max_heapify(i, 0);

      div_update(divs[i], div_sizes[i], "blue"); //Color update
      div_update(divs[i], div_sizes[i], "green"); //Color update
    }
    div_update(divs[i], div_sizes[i], "green"); //Color update
  }

  // enable button for running another algo
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default heap_sorting;
