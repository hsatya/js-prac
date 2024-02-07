// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function calculateAreaOfTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area.toFixed(3);
}

console.log(calculateAreaOfTriangle(5, 6, 7));
