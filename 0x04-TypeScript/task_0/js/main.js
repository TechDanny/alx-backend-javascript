var student1 = {
    firstName: "Danny",
    lastName: "Koki",
    age: 25,
    location: "Nairobi"
};
var student2 = {
    firstName: "Celine",
    lastName: "Kyalo",
    age: 29,
    location: "Machakos"
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("studentsTable");
    if (table) {
        var headers = ["First Name", "Location"];
        var headerRow_1 = document.createElement("tr");
        headers.forEach(function (headerText) {
            var th = document.createElement("th");
            th.textContent = headerText;
            headerRow_1.appendChild(th);
        });
        table.appendChild(headerRow_1);
        studentsList.forEach(function (student) {
            var row = document.createElement('tr');
            var firstName = student.firstName, location = student.location;
            var firstNameCell = document.createElement("td");
            firstNameCell.textContent = firstName;
            var locationCell = document.createElement("td");
            locationCell.textContent = location;
            row.appendChild(firstNameCell);
            row.appendChild(locationCell);
            table.appendChild(row);
        });
    }
});
