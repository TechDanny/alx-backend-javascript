interface Directors extends Teacher {
  numberOfReports: number;
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }
  
  class SchoolDirector implements Directors {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    numberOfReports: number;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.numberOfReports = numberOfReports;
    }
}

    function createTeacher(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    options: { yearsOfExperience?: number; location: string; [key: string]: any } = {}
  ): Teacher {
    return {
      firstName,
      lastName,
      fullTimeEmployee,
      ...options,
    };
  }
  
  const teacher1: Teacher = createTeacher("Danny", "Koki", true, { yearsOfExperience: 4, location: "Nairobi" });
  const teacher2: Teacher = createTeacher("Stella", "Kyallo", false, { location: "Machakos", contract: true });
  const director: Directors = new SchoolDirector("Musau", "Koki", true, "Naivasha", 7);
  
  const teachersList: Teacher[] = [teacher1, teacher2];
  
  document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("teachersTable");
  
    if (table) {
      const headers = ["First Name", "Full-Time Employee", "Years of Experience", "Location"];
      const headerRow = document.createElement("tr");
  
      headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
  
      table.appendChild(headerRow);
  
      teachersList.forEach((teacher) => {
        const row = document.createElement("tr");
  
        const { firstName, fullTimeEmployee, yearsOfExperience, location } = teacher;
  
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = firstName;
  
        const fullTimeEmployeeCell = document.createElement("td");
        fullTimeEmployeeCell.textContent = fullTimeEmployee.toString();
  
        const yearsOfExperienceCell = document.createElement("td");
        yearsOfExperienceCell.textContent = yearsOfExperience !== undefined ? yearsOfExperience.toString() : "N/A";
  
        const locationCell = document.createElement("td");
        locationCell.textContent = location;
  
        row.appendChild(firstNameCell);
        row.appendChild(fullTimeEmployeeCell);
        row.appendChild(yearsOfExperienceCell);
        row.appendChild(locationCell);
  
        table.appendChild(row);
      });
    }
  });
  