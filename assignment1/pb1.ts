{
    // Repeat string.
    const repeatString = (str: string, num: number) => {
        if (num <= 0) {
            console.log('Please enter a positive number');
        }
        else {
            for (let i = 0; i < num; i++) {
                console.log(str);
            }
        }
    }
    repeatString('Hello',2);
}