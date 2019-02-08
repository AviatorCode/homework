const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let answers = [];
    rl.question('Type a task to add on the command line \n', (answer) => {
        //answers.push(answer);
        let answerObj = { "title": answer, "completed": false };
        answers.push(answerObj);

        console.log(answers);
        rl.close;
        process.exit();
});