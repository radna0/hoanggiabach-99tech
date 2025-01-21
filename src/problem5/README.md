# Setup

## 1. CD into Problem 5 Directory:

```
cd express-ts-crud
```

## 2. Install dependencies:

Run the following command to install all required dependencies:

```
npm install
```

## 3. Set up the database:

The application uses SQLite for data persistence. A database file (database.sqlite) will be automatically created when you run the application for the first time.

## 4. Compile TypeScript:

Compile the TypeScript code to JavaScript:

```
npx tsc
```

This will generate a dist folder containing the compiled JavaScript files.

# Running the Application

## 1.Start the server:

Run the following command to start the server:

```
node dist/index.js
```

The server will start on http://localhost:3000.

## 2. Verify the server:

Open your browser or use a tool like curl or Postman to verify the server is running:

```
curl http://localhost:3000
```

You should see a message like:

```
Server is running on http://localhost:3000
```

## API Endpoints

The following endpoints are available:

### Products

| Method | Endpoint      | Description                       |
| ------ | ------------- | --------------------------------- |
| POST   | /products     | Create a new product              |
| GET    | /products     | List all products                 |
| GET    | /products/:id | Get details of a specific product |
| PUT    | /products/:id | Update a product                  |
| DELETE | /products/:id | Delete a product                  |
