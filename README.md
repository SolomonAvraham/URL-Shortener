# URL Shortener - TypeScript, Express & MongoDB

A simple URL shortening service built with TypeScript, Express.js, and MongoDB, deployed to **Vercel**. This project allows users to shorten long URLs and redirect them using a generated short code.

## How to Use the API

### Shorten URL

**POST** `/create`

**API Address:**
`https://url-shortener-ts.vercel.app/create`

**Request Body:**
{
    "originalUrl": "https://www.example1234.com"
}

**Response:**
{
    "shortUrl": "2uw.in/abc123"
}

### Redirect to Original URL

**GET** `/:shortUrl`

Navigate to the shortened URL (e.g., `url-shortener-ts.vercel.app/abc123`), and it will redirect you to the original URL.

## Features

- Shorten long URLs for easier sharing
- Redirect to original URLs via short links
- Simple and RESTful API
- **Deployed on Vercel**: [https://url-shortener-ts.vercel.app/create](https://url-shortener-ts.vercel.app/create)

## Technologies Used

- **TypeScript**
- **Express.js**
- **MongoDB**
 
## Getting Started

### Prerequisites

Ensure Node.js and npm are installed.

### Installation

1. Clone the repository:
    git clone https://github.com/yourusername/url-shortener-ts.git

2. Navigate to the project directory:
    cd url-shortener-ts

3. Install dependencies:
    npm install

4. Create a `.env` file and set up environment variables:
    DEV_MONGO_URI=your_dev_mongo_url
    PROD_MONGO_URI=your_prod_mongo_url
    PORT=3000
    LOCAL_SERVER_URL=http://localhost:3000
    SERVER_URL=https://your-server-url.com
    DOMAIN=2uw.in

### Running the Project

1. Compile TypeScript files:
    npm run build

2. Start the server:
    npm start

3. Access the server at `http://localhost:3000` or your configured `SERVER_URL`.

## License

This project is licensed under the MIT License.
