let merge_sort = (divs, div_sizes, enableButtons, delay_time, arsize) => {
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

  merge_partition(0, arsize - 1);

  function merge_partition(start, end) {
    if (start < end) {
      var mid = Math.floor(start + (end - start) / 2);
      div_update(divs[mid], div_sizes[mid], "yellow"); //highlighting middle in yellow
      merge_partition(start, mid);
      merge_partition(mid + 1, end);
      merge_sort(start, mid, end);
    }
  }

  function merge_sort(start, mid, end) {
    var p = start,
      q = mid + 1,
      k = 0;
    var arr = [];
    for (var i = start; i <= end; i++) {
      if (p > mid) {
        arr[k++] = div_sizes[q++];
        div_update(divs[q - 1], div_sizes[q - 1], "red");
      } else if (q > end) {
        arr[k++] = div_sizes[p++];
        div_update(divs[p - 1], div_sizes[p - 1], "red");
      } else if (div_sizes[p] < div_sizes[q]) {
        arr[k++] = div_sizes[p++];
        div_update(divs[p - 1], div_sizes[p - 1], "red");
      } else {
        arr[k++] = div_sizes[q++];
        div_update(divs[q - 1], div_sizes[q - 1], "red");
      }
    }
    for (var j = 0; j < k; j++) {
      div_sizes[start++] = arr[j];
      div_update(divs[start - 1], div_sizes[start - 1], "green");
    }
  }

  // enable button for running another algo
  setTimeout(() => {
    enableButtons();
  }, c_delay);
};

export default merge_sort;
