# 📦 Order Management Backend – Food Delivery App

This repository contains the backend implementation for the **Order Management** feature of a food delivery application.

It exposes REST APIs to:
- Fetch menu items
- Create orders
- Track order status with simulated real-time updates

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Joi (input validation)
- Jest
- Supertest
- In-memory data store (Map)

---

## 🧠 Architecture

The backend follows a clean, layered architecture:

- Routes  
- Controllers  
- Services  
- Data Store  

Key design choices:
- Business logic isolated in the service layer
- Input validation handled using Joi
- Centralized order status lifecycle management

---

## 📂 Project Structure

```plaintext
src/
├── routes/        # API route definitions
├── controllers/   # Request handling & response shaping
├── services/      # Business logic
├── validators/    # Joi schemas
├── data/          # In-memory data stores & seed data
├── app.js         # Express app configuration
└── server.js      # Server entry point

tests/
├── menu.test.js
├── order.test.js
└── order.service.test.js

## 🔁 Order Status Lifecycle

Orders automatically progress through the following statuses:

Order Received → Preparing → Out for Delivery → Delivered

- Status updates are **simulated in the backend**
- A timer updates the order status at fixed intervals
- This matches the project requirement for simulated real-time updates

---

## 📡 API Endpoints

### Get Menu

GET /api/menu

Returns a list of available food items.

---

### Create Order

POST /api/orders

#### Request Body

```json
{
  "customer": {
    "name": "John Doe",
    "address": "Pune, Maharashtra",
    "phone": "9876543210"
  },
  "items": [
    { "itemId": "1", "quantity": 2 }
  ]
}```

Get Order by ID

GET /api/orders/:id

Returns order details along with current status.

---

## 🧪 Testing Approach

The backend follows a test-driven approach:

API tests using Jest & Supertest

Covers:

Menu retrieval

Order creation

Input validation

Order fetching

Order status progression

Business logic tested independently from controllers

Run tests:

npm test

Running the Backend Locally

npm install
npm run dev

Server runs on:

<http://localhost:4000>
