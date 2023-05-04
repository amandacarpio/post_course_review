const printGreeting = (name) => {
    console.log("Hello there, " + name)
}
printGreeting("Slimer!")

// split method
const splitString = (string) => {
    console.log(string.split(""))
    // this will put each character/word(if spacing) into an array
}
splitString("hello")

// reverse method
const reverseString = (string) => {
    console.log(string.split("").reverse().join(""))
    // this works with the split method because after the split puts each character/word into an array, it will reverse the order of the new array therefore reversing
}
reverseString("adios")

const reverseWordOrder = (string) => {
    console.log(string.split(" ").reverse().join(" "))
}
reverseWordOrder("My name is Amanda")

const calculate = (num1, num2, operation) => {
    if(operation === "add"){
        console.log(num1 + num2)
    } else if (operation === "sub"){
        console.log(num1 - num2)
    } else if (operation === "multiply"){
        console.log(num1 * num2)
    } else if (operation === "divide"){
        console.log(num1 / num2)
    } else if (operation === "exp"){
        console.log(num1 ** num2)
    } else {
        console.log("You've input an impossible selection.")
    }
}
calculate(2, 5, "add")
calculate(10, 6, "sub")
calculate(10, 6, "multiply")
calculate(10, 2, "divide")
calculate(5, 5, "exp")
calculate(10, 4, "test")

// const printConsecutives = (arr) => {
//     let arr = []
//     for(let i=0; i < arr.length; i++){
//         let consec = arr[i+1] - arr[i]
//         if(Math.abs(consec)==1 && arr[i+1]+diff == arr[i+2]){
//             arr.push(i)
//         }
//     }
//     printConsecutives([1,2,3,5,10,9,8,9])
// }

function letterReverse(str){
    console.log(str.split("").reverse().join("").split(" ").reverse().join(" "))
}
letterReverse("hey friend")