// 1 //

let carPrices = [5400, 19999, 32800, 25000, 1600, 2000, 45000, 35000, 70000]

let cheap = []

let cheapCar = carPrices.filter(item => item <= 35000)

console.log(cheapCar)
    
// 2 //

let index = prompt('Индекс')

let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

arr.splice(index, 1)
if (index <= 4){
    console.log(arr)
}else if (index >= 5){
    alert()
}else{
    alert()
}

// 3 //

let arrNumber = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let number = []

arrNumber.filter(item => typeof(item) === 'number')
number.push(arrNumber)
if(number === number){
    console.log('good')
}else{
    alert()
}

// 4 //

let arrr = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]] 

let total = 0