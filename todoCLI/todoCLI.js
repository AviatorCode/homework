
function welcome() {



    
    console.log ("Welcome to Todo CLI!\n",
    "-------------------\n",
    
    "(v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit");
    
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });

    let answers= [];

    rl.question('Type a task to add on the command line \n', (answer) => {
        //answers.push(answer);
        let answerObj = {"title": answer, "completed" : false  };
        answers.push(answerObj);
        
        console.log(answers[0]);
        rl.close;
        process.exit();
    });
}

//Defination

    function view() {

    }

    function addTodo() {
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

            console.log(answers[0]);
            rl.close;
            process.exit();
        });

    }

    function complete() {

    }

    function deleteTodo (){

    }

    function quit() {
        process.exit;
    }
