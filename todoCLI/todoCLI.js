const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let answers = [];

rl.question('Type a string on the command line \n', (answer) => {
    answers.push(answer);

    console.log(answers[0]);
    rl.close;
    process.exit();
});

