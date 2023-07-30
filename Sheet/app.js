function generateData(numRows) {
  const data = [];
  const columns = [
    { name: "id", generator: () => faker.random.uuid() },
    { name: "firstName", generator: () => faker.name.firstName() },
    { name: "lastName", generator: () => faker.name.lastName() },
    { name: "email", generator: () => faker.internet.email() },
    { name: "phone", generator: () => faker.phone.phoneNumber() },
    { name: "address", generator: () => faker.address.streetAddress() },
    { name: "city", generator: () => faker.address.city() },
    { name: "state", generator: () => faker.address.state() },
    { name: "country", generator: () => faker.address.country() },
    { name: "zipCode", generator: () => faker.address.zipCode() },
  ];

  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (const column of columns) {
      row[column.name] = column.generator();
    }
    data.push(row);
  }

  return data;
}

const data = generateData(200);
console.log(data);

const tableEl = document.getElementById("table");
const tHead = tableEl.getElementsByTagName("thead")[0];
const tBody = tableEl.getElementsByTagName("tbody")[0];
const searchEl = document.querySelector("#input");

function createTableHeading(data) {
  let tableRow = document.createElement("tr");
  for (let x in data) {
    let tHeadings = document.createElement("th");
    tHeadings.textContent = x;
    tableRow.appendChild(tHeadings);
  }
  tHead.append(tableRow);
}
createTableHeading(data[0]);

function createTableBody(data) {
  for (let i = 0; i < data.length; i++) {
    let tableRow2 = document.createElement("tr");
    for (let y in data[i]) {
      let tableBody = document.createElement("td");
      tableBody.textContent = data[i][y];
      tableRow2.appendChild(tableBody);
    }
    tBody.appendChild(tableRow2);
  }
}
createTableBody(data);
searchEl.addEventListener("keypress", () => {
  let inputSearch = searchEl.value;
});
