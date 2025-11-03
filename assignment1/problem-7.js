{
    function logString(value) {
        if (typeof value === "string") {
            console.log(value);
        }
        else {
            console.log("Error: Input is not a string.");
        }
    }
    // Sample Inputs
    logString("Hello, TypeScript!"); // Output: Hello, TypeScript!
    logString(42); // Output: Error: Input is not a string.
}
