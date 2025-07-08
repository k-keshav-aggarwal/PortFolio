// gemini-local-proxy/server.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') }); // Load from parent directory

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000; // Use environment port or fallback to 3000

// Configure CORS to allow requests from your React frontend
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:4173',
        'http://localhost:8080',
        'http://localhost:8081',
        'https://ka-pf.vercel.app'
    ] // Support local dev and production domain
}));
app.use(express.json()); // Enable JSON body parsing for incoming requests

// Access your API key from environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

console.log('API Key loaded:', GEMINI_API_KEY ? `${GEMINI_API_KEY.substring(0, 10)}...` : 'NOT FOUND');

if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable is not set.');
    console.error('Please set it (e.g., in a .env file or via command line).');
    process.exit(1); // Exit if key is missing
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
// Use the updated Gemini model name
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Define the chat endpoint that your frontend will call
app.post('/chat', async (req, res) => {
    const { message, history } = req.body; // Expecting current message and optional history

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    try {
        // Start a new chat session with the provided history
        const chat = model.startChat({
            history: history || [], // Pass existing history for context
            generationConfig: {
                maxOutputTokens: 200, // Limit the length of AI responses (optional)
            },
        });

        // Send the new message to the Gemini API
        const result = await chat.sendMessage(message);
        const modelResponse = result.response.text(); // Get the AI's text response

        // Send the AI's response back to the frontend
        res.json({ response: modelResponse });

    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        console.error('Error details:', {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            stack: error.stack
        });
        res.status(500).json({ 
            error: 'Failed to get response from AI.', 
            details: error.message,
            type: error.constructor.name
        });
    }
});

// Add this anywhere *before* app.listen in your server.js
app.get('/', (req, res) => {
    res.send('Local Gemini Proxy is running and ready to receive POST requests at /chat!');
});

// Start the server and listen for requests
app.listen(port, () => {
    console.log(`Local Gemini proxy listening at http://localhost:${port}`);
});