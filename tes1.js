const readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

//fibonacci
function bilFibonacci(n) 
{
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++)
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    return fibSeries.slice(0, n);
}

//sorting
function sortArray(arr)
{
    return arr.sort((a, b) => a - b);
}

//palindrom
function isPalindrom(sentence)
{
    let clearSentence = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clearSentence === clearSentence.split('').reverse().join('');
}

//main
function main()
{
    console.log("Please enter your choice for the following, enter the corresponding number:");
    console.log("1. Fibonacci");
    console.log("2. Sorting Array");
    console.log("3. Palindrom");
    
    rl.question("Please enter your choice (1 - 3): ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Masukkan jumlah deret fibonacci yang ditampilkan: ", (n) => {
                    n = parseInt(n);

                    if (!isNaN(n) && n > 0)
                        console.log("Hasil Fibonacci: " + bilFibonacci(n).join(","));
                    else 
                        console.log("Input tidak valid");
                    rl.close();
                });
                break;
            case "2":
                rl.question("Masukkan angka (pisahkan dengan koma): ", (arrayInput) => {
                    let arr = arrayInput.split(",").map(num => parseFloat(num.trim()));
                    if (arr.every(num => !isNaN(num)))
                        console.log("Array telah diurutkan: " + sortArray(arr).join(", "));
                    else 
                        console.log("Input tidak valid");
                    rl.close();
                });
            break;
            case "3":
                rl.question("Masukkan kalimat palindrom: ", (sentence) => {
                    console.log(isPalindrom(sentence) ? "Kalimat ini palindrom" : "Kalimat ini bukan palindrom");
                    rl.close();
                });
                break;
            default:
                console.log("Invalid input!");
                rl.close();
            }
        });
    }
            
main();