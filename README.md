# OpenAI Assistant Web

This project contains a simple web client and Node.js server that demonstrate how to build an interface on top of OpenAI's API. The client is served with [Vite](https://vitejs.dev/) and the server uses Express.

## Prerequisites

- Node.js 16+
- An OpenAI API key

## Setup

1. Install dependencies for the server and client:

```bash
cd server && npm install
cd ../client && npm install
```

2. Copy `.env.example` to `.env` in the `server` directory and populate `OPENAI_API_KEY`.

3. Start the server:

```bash
npm run server
```

The server listens on the port specified by the `PORT` environment variable (defaults to `5001`).

4. Start the client in a separate terminal:

```bash
npm run dev
```

## Environment

The client expects `VITE_SERVER_URL` to contain the server URL. If not provided, it falls back to `http://localhost:5001`.

## License

This project is provided as-is for demo purposes.
