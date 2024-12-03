// This function will reveal the next part of the game when the user clicks "Enter"
function revealLink() {
    // Change the content of the message to reveal the next step
    document.getElementById('message').innerHTML = `
        <h1>Welcome to the Echo</h1>
 <p id="hint">"I am the sum of my digits. The first is twice the second, and the third is one less than the second. The fourth is twice the third."</p>
        <input type="text" id="codeInput" placeholder="Enter code..." />
        <button onclick="checkCode()">Submit</button>
    `;
}

// Ensure that the "Enter" button actually triggers the function when clicked
document.getElementById('enterButton').addEventListener('click', revealLink);
