 // Crie um array que receba 5 itens e exiba no console.
let array = ["batata", "pepino", "brocolis","alface","beterraba"]
console.log(array)
// Utilize um método para adicionar um nome ao inicio do array.
array.unshift("tomate")
console.log(array)
// Utilize um método para remover o último nome do array.
array.pop()
console.log(array)

// Utilize um método para adicionar dois nomes ao fim do array.
array.push("Beringela","couve")
console.log(array)
// Utilize um método para remover o primeiro nome do array.
array.shift()
console.log(array)
// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return (a - b)
})
console.log(numbers)