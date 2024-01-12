interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
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

class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework(): string {
      return "Currently working";
  }

  displayName(): string {
      return this.firstName;
  }
}


const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0).toUpperCase();

  const formattedName = `${firstLetter}. ${lastName}`;

  return formattedName;
};

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
  