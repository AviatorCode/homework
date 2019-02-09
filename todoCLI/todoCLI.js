const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Todo CLI!\n");
const responseValue = ("(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n  ------------------\n");
const taskvalue = [];

rl.question(responseValue, (answer) => {
    start(answer);
});

// Using regex to capture user input.
function start(answer) {
    let cRegex = /[c][0-9]/;
    let dRegex = /[d][0-9]/;

    switch (true) {
        case answer === "v":
            view();
            rl.question(responseValue, (answer) => {
                start(answer);
            });
            break;
        case answer === "n":
            rl.question('Please enter a task: ', (answer) => {
                addTodo(answer);
                rl.question(responseValue, (answer) => {
                    start(answer);
                });
            });
            break;
        case answer.match(cRegex) !== null:
            complete(answer);
            rl.question(responseValue, (answer) => {
                start(answer);
            });
            break;
        case answer.match(dRegex) !== null:
            deleteTodo(answer);
            rl.question(responseValue, (answer) => {
                start(answer);
            });
            break;    
        case answer === "q":
            console.log("Goodbye see you soon! ")
           process.exit();
            break;
        default:
            console.log("Please enter a valid response")

    }
};


function newTask(title) {
    this.title = title;
    this.completed = false;
};


//Function Definition

function view() {
    taskvalue.forEach((task, index) => {
        let mark = task.completed ? '[✓]' : '[ ]';
        console.log(`${index}${mark} ${task.title}`)
    });
}

function addTodo(answer) {
    // let task = new newTask(answer)  -   this will remove the need for task.title = answer
    let task = new newTask();
    task.title = answer;
    taskvalue.push(task);
};

function complete(answer) {
    let index = answer.split("")[1];
    if (taskvalue.length < index - 1) {
        console.log('No task found.');
    } else {
        let t = taskvalue[index];
        t.completed = true;
        console.log(`${t.title} completed.`)
    };
};

function deleteTodo(answer) {
    let index = answer.split("")[1];
    if (taskvalue.length < index - 1) {
        console.log('No task found to delete');
    } else {
        let del = taskvalue[index];
        taskvalue.splice(index, 1)
        console.log(`${del.title} deleted!.`)

    }

 
}