const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  // Add more entries as needed
];

const entriesPerPage = 10;
let currentPage = 0;

function displayTable(page) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  const startIdx = page * entriesPerPage;
  const endIdx = startIdx + entriesPerPage;

  for (let i = startIdx; i < endIdx && i < data.length; i++) {
    const entry = data[i];
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.id}</td><td>${entry.name}</td><td>${entry.age}</td>`;
    tableBody.appendChild(row);
  }
}

function nextPage() {
  const maxPage = Math.ceil(data.length / entriesPerPage) - 1;
  if (currentPage < maxPage) {
    currentPage++;
    displayTable(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    displayTable(currentPage);
  }
}

// Initial display of the table
displayTable(currentPage);
