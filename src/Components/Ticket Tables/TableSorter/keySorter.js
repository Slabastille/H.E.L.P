function getNumFromKey(key) {
  return parseInt(key.slice(3));
}

function countingSort(arr) {
  let min = Math.min(...arr.map((item) => getNumFromKey(item.key)));
  let max = Math.max(...arr.map((item) => getNumFromKey(item.key)));
  let range = max - min + 1;
  let count = Array.from({ length: range }, () => 0);
  let output = Array.from({ length: arr.length });

  arr.forEach((item) => {
    let index = getNumFromKey(item.key) - min;
    count[index]++;
  });

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let index = getNumFromKey(arr[i].key) - min;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  return output;
}

const keySorter = (allIssuesArray, direction) => {
  let sortedKeys = countingSort(allIssuesArray);
  if (direction === 'descending') {
    sortedKeys = sortedKeys.reverse();
  }
  return sortedKeys;
};

export default keySorter;
