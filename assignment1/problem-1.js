{
    // Repeat string.
    var repeatString = function (str, num) {
        if (num <= 0) {
            console.log('Please enter a positive number');
        }
        else {
            for (var i = 0; i < num; i++) {
                console.log(str);
            }
        }
    };
    repeatString('Hello', 2);
}
