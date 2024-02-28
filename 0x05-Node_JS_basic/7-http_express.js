const express = require('express');
const fs = require('fs');

const app = express();
app.listen(1245);

function countStudents(fileName) {
  const totalStudents = {};
  const fields = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    fs(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.len; i += 1) {
          if (lines[i]) {
            len += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(totalStudents, field[3])) {
              totalStudents[field[3]].push(field[0]);
            } else {
              totalStudents[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = len - 1;
        console.log(`Number of students: ${l}`);
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            console.log(`Number of students in ${k}: ${v}. List: ${totalStudents[k].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});
module.exports = app;
