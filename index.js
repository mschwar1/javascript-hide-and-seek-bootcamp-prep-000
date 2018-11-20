function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list li');
  for (var i=0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var digging = document.querySelectorAll('#grand-node div');
  for (var i < digging.length) {
    if digging[i].innerHTML.has('div') {
      i++
    }
    else {
      return digging[i].innerHTML;
    }
  }
}
