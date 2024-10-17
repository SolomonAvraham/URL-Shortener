# URL Shortener - TypeScript & Express

A simple URL shortening service built with TypeScript and Express.js. This project allows users to shorten long URLs and redirect them using a generated short code.

## How to Use the API

### Shorten URL

**Endpoint:**
**POST** `/api/urls/shorten`

**Request Body:**

````json
{
    "originalUrl": "https://www.example.com"
}


## Features

- Shorten long URLs to make them easy to share
- Redirect to the original URL when accessing the short URL
- Simple and easy-to-use RESTful API

## Technologies Used

- **TypeScript** - For strong typing and clean code
- **Express.js** - For handling HTTP requests and routes
- **dotenv** - For managing environment variables

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/url-shortener-ts.git
    ```
2. Navigate to the project directory:
    ```bash
    cd url-shortener-ts
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and configure the following environment variables:
    ```
    PORT=3000
    DATABASE_URL=your_database_url
    ```

### Running the Project

1. Compile TypeScript files:
    ```bash
    npm run build
    ```
2. Start the server:
    ```bash
    npm start
    ```
3. The server will run on `http://localhost:3000`.

### Available Scripts

- `npm run build` - Compiles TypeScript files to JavaScript
- `npm run dev` - Runs the server in development mode with live reloading
- `npm start` - Starts the server in production mode

````
