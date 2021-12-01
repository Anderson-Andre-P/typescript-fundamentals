// Any is any/none type
// Use 'any' case only as a last resort.

function showMessage(msg: any) {
    return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Hello'));
console.log(showMessage(1));
