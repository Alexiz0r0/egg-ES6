import {perimeter} from "./perimeter.js";
import {area} from "./area.js";
import {rectangles} from "./rectangleData.js";

const generateTable = () => {
    const tableContainer = document.getElementById('tableContainer');

    tableContainer.innerHTML = `
        <table class="fl-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>WIDTH</th>
                    <th>HEIGHT</th>
                    <th>PERIMETER</th>
                    <th>AREA</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    `;
    generateTableBody();
}

const generateTableRow = (rectangle) => {
    return `
        <tr>
          <td>${rectangle.id}</td>
          <td>${rectangle.width}</td>
          <td>${rectangle.height}</td>
          <td>${perimeter(rectangle.width, rectangle.height)}</td>
          <td>${area(rectangle.width, rectangle.height)}</td>
        </tr>
    `
}

const generateTableBody = () => {
    const tableBody = document.getElementById('table-body');

    for (const rectangle of rectangles) {
        tableBody.innerHTML += generateTableRow(rectangle);
    }
}

generateTable();