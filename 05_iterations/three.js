const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  go: "golang",
};

for (const key in myObj) {
  console.log(`${key} file name for ${myObj[key]}`);
}
