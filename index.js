const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Function to determine heart rate status
function getHeartRateStatus(age, heartRate) {
    let normalRange = {};

    // Normal resting heart rate ranges based on age group
    if (age < 1) {
        normalRange = { min: 100, max: 160 }; // Infant
    } else if (age >= 1 && age <= 10) {
        normalRange = { min: 70, max: 120 }; // Children
    } else if (age > 10 && age <= 18) {
        normalRange = { min: 60, max: 100 }; // Teens
    } else if (age > 18 && age <= 60) {
        normalRange = { min: 60, max: 100 }; // Adults
    } else {
        normalRange = { min: 60, max: 100 }; // Seniors
    }

    if (heartRate < normalRange.min || heartRate > normalRange.max) {
        return "critical";
    } else {
        return "normal";
    }
}

// API endpoint to take age and heart rate and return status
app.post('/check-heart-rate', (req, res) => {
    const { age, heartRate } = req.body;

    // Input validation
    if (!age || !heartRate) {
        return res.status(400).json({ error: 'Please provide both age and heart rate' });
    }

    const status = getHeartRateStatus(age, heartRate);
    res.json({ status: status });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
