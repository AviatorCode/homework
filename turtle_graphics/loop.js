// Drawing a grid
// const moveHistory =
//     [[0, 4],
//     [3, 4],
//     [3, 1],
//     [8, 1],
//     [8, 9],
//     [3, 9],
//     [3, 6],
//     [0, 6]];

// let result = [];
// for (let x = 0; x < moveHistory.length; x++) {
//     for (let y = 0; y < moveHistory[x].length; y++) {
//         result.push(moveHistory[x][y]);
//     }
// }
// console.log(result);
// 

/* let obj = {};
points.forEach((point) => {
obj[`${point}`] = true;
});
console.log(obj);
for (let y =0; y < 10; y++){
let result = '';
for (let x=0; x < 10; x++){
let coordinate = [x, y];
if(obj[`${coordinate}`]){
result = result + '■';
} else {
result = result + '□';
}
};
console.log(result);
}; */

// let grid = [];



for (let y =0; y< 10; y++){
    let result = '';
    for (let x=0; x < 10; x++){
        let coordinate = [x, y];
        result = result + '□';
    };
    console.log(result);
};
