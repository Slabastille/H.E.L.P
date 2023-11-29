function Validate(M) {
  // Length of given String
  let len = M.length;

  // Store digits in temp
  let temp = '';

  // Iterate given M
  for (let i = 0; i < len; i++) {
    // If any digit, append it to temp
    if (!isNaN(parseInt(M[i]))) temp += M[i];
  }

  // Find new length of String
  let nwlen = temp.length;

  // If length is not equal to 10
  if (nwlen != 10) {
    document.write('Invalid<br>');
    return;
  }

  // Store final result
  let res = '';

  // Print final result
  console.log(temp);
  return temp;
}

export default Validate;
