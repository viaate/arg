function revealLink() {
    document.getElementById('message').innerHTML = `
        <h1>Welcome to the Echo</h1>
        <p>The first step is to find the door. Enter the code to continue...</p>
        <input type="text" id="codeInput" placeholder="Enter code..." />
        <button onclick="checkCode()">Submit</button>
    `;
}

function checkCode() {
    const code = document.getElementById('codeInput').value;
    if (code === '7421') {
        window.location.href = 'clue2.html';
    } else {
        alert('Incorrect code. Try again.');
    }
}

