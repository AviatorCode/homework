//Test data for boxit
myArray = ["dsgffgddfg", "iggdfgdfs", "adfgddffg", "ByteStream", "test"];


function maxStrLength(arrStr) {

    let mstrlgt = 0;
    for (str in arrStr) {
        if (arrStr[str].length > mstrlgt) {
            mstrlgt = arrStr[str].length;

        }

    }
    return mstrlgt;
}

//console.log(maxStrLength(myArray));


function boxIt(arrStr) {
    console.log(drawTopBorder(maxStrLength(arrStr)) + '\n');

    for (item in arrStr) {

        let spaces = addSpaces(arrStr[item], (maxStrLength(arrStr)));
      if (arrStr.indexOf(item) !== 0){
        console.log(drawMiddleBorder(maxStrLength(arrStr)) + '\n');
      }
        console.log(drawBarsAround(spaces));
       
    }
    console.log(drawBottomBorder(maxStrLength(arrStr)) + '\n');


}
function drawLine(num) {
    let line = '━';
    return (line.repeat(num));
};


function drawTopBorder(num) {
    let lefttop = '┏';
    let righttop = '┓';
    return (lefttop + drawLine(num) + righttop);
}


//console.log(drawTopBorder(10));

function drawBottomBorder(num) {
    let leftbottom = '┗';
    let rightbottom = '┛';

    return (leftbottom + drawLine(num) + rightbottom);
};

//console.log(drawBottomBorder(10));


function drawMiddleBorder(num) {
    let leftside = '┣';
    let rightside = '┫';

    return (leftside + drawLine(num) + rightside);
}
//console.log(drawMiddleBorder(10));

function drawBarsAround(str) {
    return ('┃' + str + '┃')
}

function addSpaces(str, maxlength) {
    //This is going to return a string that contains string + and as many spaces needed
    //string.lenght = maxlength.
    let difflength = maxlength - str.length;
    let newStr = '';
    for (let i = 0; i <= difflength - 1; i++) {
        newStr += ' ';

    }
    return (str + newStr)


}
boxIt(myArray);