// break explore
var numbers = [45, 87, 89, 32, 99, 80, 21, 188, 33, 55, 22];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}

// continue explore
var numbers = [45, 87, 89, 32, 99, 80, 21, 188, 33, 55, 22];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}