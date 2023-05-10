// Define an empty array named foods
const foods = []
console.log('Exercise 1 Result: ', foods)

// Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
foods.push('pizza', 'cheeseburger')
console.log('Exercise 2 Result: ', foods)

// Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
foods.unshift('taco')
console.log('Exercise 3 Result: ', foods)

// Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
let favFood = foods[1]
console.log(favFood)

// Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
foods.splice(2, 0, 'tofu')
// splice inserts or removes elements from an array
// 2 is the index the new string will have and 0 defines how many elements should be removed
console.log('Exercise 5 Result: ', foods)

// Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'
foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 Result: ', foods)

// Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'. Assign the new array to a variable named yummy.
let yummy = foods.slice(1, 3)
console.log('Exercise 7 Result: ', yummy)

// Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
const soyIdx = foods.indexOf('tofu')
console.log(soyIdx)

// Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string: 'taco -> sushi -> cupcake -> tofu -> cheeseburger'