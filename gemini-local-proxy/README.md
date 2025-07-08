# Gemini Proxy Server

A Node.js proxy server for the Gemini AI API.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to this directory: `cd gemini-local-proxy`
3. Run: `vercel`
4. Follow the prompts
5. Set environment variable in Vercel dashboard:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

### Option 2: Railway

1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Select this `gemini-local-proxy` folder
4. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

### Option 3: Render

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your repository
4. Set:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variable: `GEMINI_API_KEY=your_api_key`

## After Deployment

1. Note your deployed URL (e.g., `https://your-app.vercel.app`)
2. Update your React app's fetch URL from `http://localhost:3001/chat` to `https://your-deployed-url.com/chat`

## Local Development

```bash
npm install
npm start
```

Server will run on `http://localhost:3000`
