const table = document.getElementById("tbody")
const url1 = "https://pxdata.stat.fi/PxWeb/api/v1/fi/StatFin/vaerak/statfin_vaerak_pxt_11ra.px"

console.log("virhe");

async function fetchPopulationData() {
        const queryResponse = await fetch("population_query.json");
        const populationQuery = await queryResponse.json();

        const response = await fetch(url1, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(populationQuery)
        });
        
        const data = await response.json();
        displayPopulationData(data);
}

console.log("virhe");

function displayPopulationData(data) {
    const municipalities = data.dimension.Alue.category.label;
    const populations = data.value;

    table.innerHTML = "";

    Object.keys(municipalities).forEach((key, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td1.innerText = municipalities[key];
        td2.innerText = populations[index] ? populations[index].toLocaleString() : "N/A";

        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });
}

console.log("virhe");


window.addEventListener("load", fetchPopulationData);