function saveSession() {
    const casino_url = document.getElementById("casino_url").value;
    const username = document.getElementById("username").value;

    if (!casino_url || !username) {
        alert("Please enter both the Casino URL and Username");
        return;
    }

    localStorage.setItem("casino_url", casino_url);
    localStorage.setItem("username", username);
    alert("Session saved! Click Start Prediction.");
}

function startPrediction() {
    const casino_url = localStorage.getItem("casino_url");
    const username = localStorage.getItem("username");

    if (!casino_url || !username) {
        alert("Please save your session first.");
        return;
    }

    fetch(`https://your-backend-url.com/predict?url=${casino_url}&username=${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("prediction_result").innerText = `Prediction: ${data.multiplier}, Confidence: ${data.confidence}`;
        })
        .catch(error => {
            document.getElementById("prediction_result").innerText = "Error fetching prediction.";
        });
}
