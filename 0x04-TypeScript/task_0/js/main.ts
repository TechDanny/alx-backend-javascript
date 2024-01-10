interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Danny",
    lastName: "Koki",
    age: 25,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Celine",
    lastName: "Kyalo",
    age: 29,
    location: "Machakos"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("studentsTable");
    if (table) {
        const headers = ["First Name", "Location"];
        const headerRow = document.createElement("tr");

        headers.forEach((headerText) => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        studentsList.forEach((student) => {
            const row = document.createElement('tr');

            const { firstName, location} = student;

            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = firstName;

            const locationCell = document.createElement("td");
            locationCell.textContent = location;

            row.appendChild(firstNameCell);
            row.appendChild(locationCell);

            table.appendChild(row);
        });
    }
});