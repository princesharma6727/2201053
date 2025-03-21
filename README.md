# Calculator API

This is a **Calculator API** built using **Node.js** and **Express.js**, allowing users to perform basic arithmetic operations via HTTP requests.

## Features
- Addition (`/add?num1=5&num2=3`)
- Subtraction (`/subtract?num1=5&num2=3`)
- Multiplication (`/multiply?num1=5&num2=3`)
- Division (`/divide?num1=5&num2=3`)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/princesharma6727/2201053.git
   cd 2201053
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```
   The server runs on `http://localhost:9876`

## API Endpoints

### 1. Addition
**GET** `/add?num1=5&num2=3`
#### Response:
```json
{
  "operation": "addition",
  "result": 8
}
```

### 2. Subtraction
**GET** `/subtract?num1=5&num2=3`
#### Response:
```json
{
  "operation": "subtraction",
  "result": 2
}
```

### 3. Multiplication
**GET** `/multiply?num1=5&num2=3`
#### Response:
```json
{
  "operation": "multiplication",
  "result": 15
}
```

### 4. Division
**GET** `/divide?num1=6&num2=3`
#### Response:
```json
{
  "operation": "division",
  "result": 2
}
```

## Deployment
To deploy this API, push the code to your GitHub repository and host it on platforms like **Render, Vercel, or Railway**.

## License
This project is **MIT Licensed**.

---

**Made by Prince Sharma** 🚀
