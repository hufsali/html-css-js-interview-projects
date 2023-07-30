const btnEl = document.querySelector("button");
const startNumEl = document.querySelector("#start-num");
const endNumEl = document.querySelector("#end-num");
const tables = document.querySelector("#tables");
btnEl.addEventListener("click", () => {
  tables.innerHTML = "";
  let startNum = startNumEl.value;
  let endNum = endNumEl.value;

  if (startNum == "" || endNum == "") {
    alert("both fields should be filled");
    return;
  }

  startNum = Number(startNum);
  endNum = Number(endNum);

  if (startNum > endNum) {
    alert("start number should be less than end number ");
    return;
  }

  for (let num = startNum; num <= endNum; num++) {
    const ul = document.createElement("ul");

    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      const product = num * i;
      li.textContent = product;
      ul.appendChild(li);
      li.addEventListener("click", () => {
        const lis = tables.querySelectorAll("li");
        for (let z = 0; z < lis.length; z++) {
          if (Number(lis[z].textContent) % product == 0) {
            lis[z].classList.add("highlight");
          } else {
            lis[z].classList.remove("highlight");
          }
        }
      });
    }

    tables.appendChild(ul);
  }
});
