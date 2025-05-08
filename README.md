# Mini E-Commerce Platform

A simple e-commerce web application with two main tabs — one for submitting products, and one for viewing submitted products, with contextual search functionality.

## Features

- Product submission form with validation
- Product listing with card layout
- Contextual search that understands user intent
- Responsive design using Tailwind CSS

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Contextual Search**: Keyword-based semantic matching

## Prerequisites

- Node.js (v14+)
- PostgreSQL (v12+)
- npm or yarn

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mini-ecommerce.git
cd mini-ecommerce
```

### 2. Database Setup

Create a PostgreSQL database for the application:

```bash
createdb mini_ecommerce
```

Initialize the database schema:

```bash
psql mini_ecommerce < server/db/init.sql
```

### 3. Backend Setup

```bash
# Navigate to server directory
cd server

# Copy environment variables and update as needed
cp .env.example .env

# Install dependencies
npm install

# Start the server in development mode
npm run dev
```

The server will start on http://localhost:5000.

### 4. Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start the development server
npm start
```

The React application will start on http://localhost:3000.

## Using the Application

1. **Adding Products**: 
   - Navigate to the "Product Submission" tab
   - Fill in the product details and submit

2. **Viewing Products**:
   - Go to the "My Products" tab to see all submitted products
   - Use the search bar for contextual search (e.g., "need something to sit with my family" might show sofas or chairs)

## Project Structure

### Backend

- `server.js`: Entry point
- `controllers/`: Contains business logic
- `routes/`: API routes
- `db/`: Database configuration and schema
- `utils/`: Utility functions, including contextual search

### Frontend

- `src/components/`: Reusable UI components
- `src/pages/`: Page components
- `src/services/`: API service for communicating with the backend

## License

MIT