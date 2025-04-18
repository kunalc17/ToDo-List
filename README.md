# ToDo List API

A simple RESTful API for managing a ToDo list, built with Express.js and MongoDB.

## Project Structure

```
├── app.js              # Main application file
├── config/             # Configuration files
│   └── db.js           # Database connection
├── controllers/        # Route controllers
│   └── todoController.js
├── models/             # Mongoose models
│   └── todoModel.js    
├── routes/             # Express routes
│   └── todoRoutes.js   
├── services/           # Business logic
│   └── todoService.js  
└── .env                # Environment variables
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/todo-list
   PORT=3000
   ```
4. Start the server:
   ```
   npm start
   ```
5. For development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### Todos

- **GET /api/todos** - Get all todos
- **GET /api/todos/:id** - Get a specific todo
- **POST /api/todos** - Create a new todo
- **PUT /api/todos/:id** - Update a todo
- **DELETE /api/todos/:id** - Delete a todo

### Request/Response Examples

#### Create a Todo

**Request:**
```
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false
}
```

**Response:**
```
Status: 201 Created
{
  "_id": "60f7b0b3e6b3c92b48d8e5a1",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "createdAt": "2023-07-21T10:15:23.456Z",
  "updatedAt": "2023-07-21T10:15:23.456Z"
}
``` 