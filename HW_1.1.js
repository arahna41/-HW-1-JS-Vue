// task HW1.1.1
var array = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

for (var i = 0; i < array.length; i++) {
    if (array[i] != array[i] ) {
        array[i] = null
    }
}
console.log('Проверка и изменение массива завершена')
console.log(array)

// task HW1.1.2
var array = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

var i = 0
while (i < array.length) {
    if (array[i] != array[i] ) {
        array[i] = null
    }
    i++
}
console.log('Проверка и изменение массива завершена')
console.log(array)