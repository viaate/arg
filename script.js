// This function will reveal the next part of the game when the user clicks "Enter"
function revealLink() {
    // Change the content of the message to reveal the next step
    document.getElementById('message').innerHTML = `
        <h1>Welcome to the Echo</h1>
        <p id="hint">The code is hidden in these fragments. Piece them together:</p>
        <div id="hintFragment">
            <h3>7<h3
            <h3>4<h3
            <h3>2<h3
            <h3>1<h3
        </div>

        <input type="text" id="codeInput" placeholder="Enter code..." />
        <button onclick="checkCode()">Submit</button>
    `;
}

// Ensure that the "Enter" button actually triggers the function when clicked
document.getElementById('enterButton').addEventListener('click', revealLink);
