function getStudentIdsSum(students) {
  const totalSum = students.reduce((sum, student) => sum + student.id, 0);
  return totalSum;
}
export default getStudentIdsSum;
