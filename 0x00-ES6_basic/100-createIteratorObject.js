export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const result = {
            value: currentDepartment[currentEmployeeIndex],
            done: false,
          };
          currentEmployeeIndex += 1;
          return result;
        }
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
        return this.next();
      }
      return { done: true };
    },
  };

  return iterator;
}
