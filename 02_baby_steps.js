var result = process.argv.slice(2).reduce(function(sum, val) {
  return sum + Number(val);
}, 0);

console.log(result);