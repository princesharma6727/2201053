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
![WhatsApp Image 2025-03-21 at 20 03 29_e2b82d6d](https://github.com/user-attachments/assets/7dfc4fe6-f452-4781-a879-6bac1a1f753c)
![WhatsApp Image 2025-03-21 at 20 03 31_511270eb](https://github.com/user-attachments/assets/25493871-7af7-42d9-949a-ab21c095011b)
![WhatsApp Image 2025-03-21 at 20 03 29_9db99fff](https://github.com/user-attachments/assets/e56b820a-ba59-430e-aa0b-637b31d71ae2)
![WhatsApp Image 2025-03-21 at 20 03 29_f7654284](https://github.com/user-attachments/assets/4f1be518-8b57-4062-971e-6718c9074f8d)
![WhatsApp Image 2025-03-21 at 20 03 30_1c442afb](https://github.com/user-attachments/assets/c14b6478-dcfa-4136-bb35-ae2f6daf33ad)
![WhatsApp Image 2025-03-21 at 20 03 30_a40e07ac](https://github.com/user-attachments/assets/126fdc95-d254-4805-8693-42c797de8a00)
![WhatsApp Image 2025-03-21 at 20 03 30_d4494f6e](https://github.com/user-attachments/assets/8651bffb-4b54-465d-9154-ba2bdb983edd)


---

**Made by Prince Sharma** 🚀
