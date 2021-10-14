// task HW1.2.1

var array = [45, "246", 73, "4", 15, 36, 17, 89, "49", 167, 123];
var count = 0;

for (var i = 0; i < array.length; i++) {
  if (typeof array[i] === "number" && array[i] % 3 == 0) {
    ++count;
  }
}
if (count == 0) {
  console.log(`В данном массиве нет чисел кратных 3`);
} else {
  console.log(`В данном массиве ${count} чисел кратных 3`);
}

// task HW1.2.2

var array = [45, "246", 73, "4", 15, 36, 17, 89, "49", 167, 123];
var count = 0;
var i = 0

while (i < array.length) {
  if (typeof array[i] === "number" && array[i] % 3 == 0) {
    ++count;
  }
  i++
}

if (count == 0) {
  console.log(`В данном массиве нет чисел кратных 3`);
} else {
  console.log(`В данном массиве ${count} чисел кратных 3`);
}
