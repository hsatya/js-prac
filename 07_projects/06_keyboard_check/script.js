const insert = document.querySelector("#insert");
// document.body.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   const p = document.createElement("p");
//   const keyNode = document.createTextNode(e.key);
//   p.app = keyNode;
//   insert.appendChild(p);
// });

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `;
});
