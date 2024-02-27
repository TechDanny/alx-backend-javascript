const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    let cs = 0;
    let swe = 0;

    const csList = [];
    const sweList = [];

    for (let i = 1; i < lines.length; i + 1) {
      const [firstName, compScience, softwareEng] = lines[i].split(',');
      if (compScience !== undefined && !isNaN(compScience)) {
        cs += 1;
        csList.push(firstName);
      }
      if (softwareEng !== undefined && !isNaN(softwareEng)) {
        swe += 1;
        sweList.push(firstName);
      }
    }
    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${cs}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
  } catch (error) {
    console.log('Cannot load the database');
  }
}
module.exports = countStudents;
