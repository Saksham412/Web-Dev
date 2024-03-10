function busyWait(milliseconds) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        while (Date.now() - startTime < milliseconds) {
            // Busy wait
        }
        resolve();
    });
}
  
// Example usage:
console.log("Start");

busyWait(3000)
    .then(() => {
        console.log("3 seconds have passed");
    });
    
console.log("End");