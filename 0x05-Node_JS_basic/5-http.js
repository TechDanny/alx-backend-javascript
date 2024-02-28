const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const string = output.slice(0, -1);
      res.end(string);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});
app.listen(1245, 'localhost', () => {
  console.log('...');
});

module.exports = app;
