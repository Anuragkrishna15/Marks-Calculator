document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get input values
    let subject = document.getElementById('subject').value;
    let st1 = parseFloat(document.getElementById('st1').value);
    let st2 = parseFloat(document.getElementById('st2').value);
    let st3 = parseFloat(document.getElementById('st3').value);

    // Determine maximum marks based on the selected subject
    let maxST = (subject === 'oops') ? 40 : 50;  // OOPS has 40 marks, others have 50
    let maxFinal = 60;  // Final exam is 60 marks for all subjects

    // Calculate total percentage from STs
    let totalSTPercentage = calculateTotalSTMarks(st1, st2, st3, maxST);

    // Calculate required final marks to pass
    let requiredFinalMarks = calculateRequiredFinalMarks(totalSTPercentage);

    // Show the result
    document.getElementById('result').innerHTML = `
        Your total percentage from ST 1, 2, and 3 is: ${totalSTPercentage.toFixed(2)}%<br>
        You need ${requiredFinalMarks.toFixed(2)} marks out of 60 in the final exam to pass (40% total required).
    `;
});

// Function to calculate total ST percentage
function calculateTotalSTMarks(st1, st2, st3, maxST) {
    let st1Percentage = (st1 / maxST) * 10;  // ST 1 contributes 10%
    let st2Percentage = (st2 / maxST) * 10;  // ST 2 contributes 10%
    let st3Percentage = (st3 / maxST) * 20;  // ST 3 contributes 20%

    return st1Percentage + st2Percentage + st3Percentage;
}

// Function to calculate required final marks to pass
function calculateRequiredFinalMarks(currentPercentage) {
    let passingPercentage = 40;  // Required percentage to pass

    // Calculate how much more percentage is needed
    let requiredFinalPercentage = passingPercentage - currentPercentage;

    // Convert percentage into final exam marks (out of 60)
    let requiredFinalMarks = (requiredFinalPercentage / 60) * 60;

    return Math.max(0, requiredFinalMarks);  // Ensure it's not negative
}
