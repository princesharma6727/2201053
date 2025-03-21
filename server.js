require('dotenv').config(); // Load environment variables
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
const TEST_SERVER_URL = "http://20.244.56.144/test";

// Load access token from environment variable
const AUTH_TOKEN = `Bearer ${process.env.MY_ACCESS_TOKEN}`;

let windowStore = []; // Stores unique numbers within window size

// Function to fetch numbers from test server with authentication
async function fetchNumbers(type) {
    try {
        const AUTH_TOKEN = `Bearer ${process.env.MY_ACCESS_TOKEN}`;
        console.log(`Fetching ${type} with token:`, AUTH_TOKEN);

        const res = await axios.get(`${TEST_SERVER_URL}/${type}`, {
            headers: { Authorization: AUTH_TOKEN },  // Correctly formatted token
            timeout: 500
        });

        return res.data.numbers || [];
    } catch (error) {
        console.log(`Error fetching ${type} numbers:`, error.response?.status, error.message);
        return [];
    }
}

// Function to update the sliding window
function updateWindow(newNumbers) {
    const uniqueNumbers = [...new Set([...windowStore, ...newNumbers])]; // Remove duplicates

    if (uniqueNumbers.length > WINDOW_SIZE) {
        uniqueNumbers.splice(0, uniqueNumbers.length - WINDOW_SIZE); // Keep only the last 10 numbers
    }

    windowStore = uniqueNumbers;
    return windowStore;
}

// API Route to fetch and store numbers
app.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;
    const validTypes = { p: "primes", f: "fibo", e: "even", r: "rand" };

    if (!validTypes[type]) {
        return res.status(400).json({ error: "Invalid number type. Use 'p', 'f', 'e', or 'r'." });
    }

    const prevState = [...windowStore]; // Store previous state
    const newNumbers = await fetchNumbers(validTypes[type]); // Fetch numbers
    const currState = updateWindow(newNumbers); // Update the window

    // Calculate average
    const avg = currState.length ? (currState.reduce((a, b) => a + b, 0) / currState.length).toFixed(2) : 0;

    res.json({
        windowPrevState: prevState,
        windowCurrState: currState,
        numbers: newNumbers,
        avg: parseFloat(avg)
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});