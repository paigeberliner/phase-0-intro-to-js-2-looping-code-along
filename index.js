// Code your solutions in this file
const names = ["Paige","Rachel","Maddie"];
function writeCards(names, events) {
    let newarray = []
for (let i=0; i < names.length; i++) {
 newarray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`); 
}
  return newarray;
}

function countDown(n){
if (n>=0){
    console.log(n);
    n--;
    countDown(n);
}
else {
    return;
}
}
countDown(10);
