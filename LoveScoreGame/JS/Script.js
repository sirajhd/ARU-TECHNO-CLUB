function calculateLoveScore() {
    // Get values from input fields
    var myname = document.getElementById("myname").value;
    var partnerName = document.getElementById("partnerName").value;

    // Check if the user's name is provided
    if (myname.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if (partnerName.trim() === "") {
        alert("Please enter your partner's name.");
        return;
    }

    // Generate a random love score
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Dear " + myname + ", your love score with " + partnerName + " is " + loveScore + "%";

    // Add a class for styling based on the score
    if (loveScore >= 50) {
        resultDiv.classList.add("good");
        resultDiv.classList.remove("poor");
    } else {
        resultDiv.classList.add("poor");
        resultDiv.classList.remove("good");
    }
}
