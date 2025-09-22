async function fetchPopulation() {
  try {
    const response = await fetch("/getEmployment");
    const dataset = await response.json();

    const municipalities = dataset.dimension.Alue.category.label;
    const values = dataset.value;

    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    let i = 0;
    for (const key in municipalities) {
      const row = document.createElement("tr");

      const cellMunicipality = document.createElement("td");
      cellMunicipality.textContent = municipalities[key];

      const cellPopulation = document.createElement("td");
      cellPopulation.textContent = values[i];

      row.appendChild(cellMunicipality);
      row.appendChild(cellPopulation);

      tbody.appendChild(row);
      i++;
    }
  } catch (error) {
    console.error("Error fetching population data:", error);
  }
}
window.addEventListener("DOMContentLoaded", fetchPopulation);
