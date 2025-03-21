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

##screenshot
![WhatsApp Image 2025-03-21 at 20 03 29_9db99fff](https://github.com/user-attachments/assets/8190f32f-bc68-45f5-9bae-1d64240b5b7c)
![WhatsApp Image 2025-03-21 at 20 03 31_511270eb](https://github.com/user-attachments/assets/d59cbc17-1001-4900-ac16-ba0ca2d3ca92)
![WhatsApp Image 2025-03-21 at 20 03 29_f7654284](https://github.com/user-attachments/assets/75fc89f4-4231-4269-9d56-12acb970cd69)
![WhatsApp Image 2025-03-21 at 20 03 30_1c442afb](https://github.com/user-attachments/assets/a7f0cfda-fb6e-4e9a-bcbd-7b41fefe0212)
![WhatsApp Image 2025-03-21 at 20 03 30_a40e07ac](https://github.com/user-attachments/assets/d6331efb-c7f2-4c6f-978e-138bc273bc6d)
![WhatsApp Image 2025-03-21 at 20 03 30_d4494f6e](https://github.com/user-attachments/assets/7e7bbcdd-b584-478b-aead-bb674d940ae9)



---

**Made by Prince Sharma** 🚀
