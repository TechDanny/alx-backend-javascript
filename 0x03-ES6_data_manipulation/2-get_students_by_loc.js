function getStudentsByLocation(students, city) {
  const studentsFilter = students.filter((student) => student.location === city);
  return studentsFilter;
}
export default getStudentsByLocation;
