let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";
  let num = 1;
  for (let s = 0; s < n - i; s++) {
    row += " ";
  }

  for (let j = 0; j < i; j++) {
    row += num + " ";
    num = num * (i - j - 1) / (j + 1);
  }
  console.log(row);
}
