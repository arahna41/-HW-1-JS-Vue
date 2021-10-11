var array = [16, true, 'MetraBit', NaN, {name: 'UserName;', hobby: 'JS'}, 30, NaN, null, false, 'Vue']
var str = 0
var num = 0
var bool = 0
var nul = 0
var obj = 0


function calcElementsDifferentTypes() {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            ++str
        } else if (typeof array[i] === 'number') {
            ++num
        } else if (typeof array[i] === 'boolean') {
            ++bool
        } else if (array[i] === null) {
            ++nul
        } else if (typeof array[i] === 'object') {
            ++obj
        }
    }
}

calcElementsDifferentTypes()

console.log(`String: ${str} `)
console.log(`Number: ${num} `)
console.log(`Boolean: ${bool} `)
console.log(`Null: ${nul} `)
console.log(`Object: ${obj} `)