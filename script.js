document.getElementById("analyzeBtn").onclick = function() {
    let text = document.getElementById("textInput").value;
    let resultDiv = document.getElementById("resultDisplay");

    // Handle empty input gracefully
    if (text.trim() === "") {
        alert("Input is empty. Please enter some text.");
        resultDiv.style.display = "none";
        return;
    }

    // 1. Total characters using .length
    let totalChars = text.length;

    // 2. Total words using .split(" ")
    // Filter is used here to handle multiple spaces gracefully
    let rawWords = text.trim().split(" ");
    let finalWords = [];
    for (let i = 0; i < rawWords.length; i++) {
        if (rawWords[i] !== "") {
            finalWords.push(rawWords[i]);
        }
    }
    let totalWords = finalWords.length;

    // 3. Reverse the entire text using .split().reverse().join()
    let reversedText = text.split("").reverse().join("");

    // Displaying the results in the styled div
    document.getElementById("charCount").innerText = totalChars;
    document.getElementById("wordCount").innerText = totalWords;
    document.getElementById("reversedText").innerText = reversedText;

    // Show the styled div
    resultDiv.style.display = "block";
};