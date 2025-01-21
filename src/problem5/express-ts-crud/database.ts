import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

// Create the products table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL
    )
  `);
});

export default db;