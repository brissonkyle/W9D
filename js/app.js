// function 1
function maths(num1 , num2) {
    let result = (num1 + num2) * 5;
    return result;
}
console.log(maths(3 , 3));
console.log(maths(7 , 5));
console.log(maths(1 , 3));

// function 2
function checksStrLength(string1) {
    let str1 = "Josh";
    if (str1.length > 10) {
        console.log(true);
    } else if (str1.length < 10) {
        console.log(false);
    } else {
        console.log("something is wrong");
    }
    
}

checksStrLength()


// function 3
let names = ["john", "josh", "philip"]
let names2 = ["john", "josh", "pho"]
let names3 = ["john", "josh", "phinny"]
function checksNames(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].startsWith('ph')) {
            return str[i];
        }
    } 
}
console.log(checksNames(names));
console.log(checksNames(names2));
console.log(checksNames(names3));