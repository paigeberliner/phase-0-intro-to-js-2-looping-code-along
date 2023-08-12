const names = ["name1", "name2", "name3"];

function writeCards(names){
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(n){
    if (n>=0){
        console.log(n);
        n--;
        return countDown(n)
    }
}