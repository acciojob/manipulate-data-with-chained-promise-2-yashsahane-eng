//your JS code here. If required.
const output = document.getElementById("output");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

new Promise(resolve => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
})
.then(arr => {
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return delay(1000).then(() => {
        output.textContent = evenNumbers.join(",");
        return evenNumbers;
    });
})
.then(arr => {
    const doubled = arr.map(num => num * 2);

    return delay(2000).then(() => {
        output.textContent = doubled.join(",");
    });
})
.catch(error => {
    console.error(error);
});