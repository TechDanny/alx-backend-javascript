const message = 'Welcome to Holberton School, what is your name?\n';

function ask() {
  process.stdout.write(`${message}`);
}
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
}

process.on('exit', () => {
  process.stdout.write('This important software is now closing');
  process.stdout.write('\n');
});

ask();
