import express from 'express';
import db from './database';

const app = express();
app.use(express.json());

// Create a new product
app.post('/products', (req, res) => {
    const { name, description, price } = req.body;
    const sql = `INSERT INTO products (name, description, price) VALUES (?, ?, ?)`;
    db.run(sql, [name, description, price],  function (err: Error | null) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
            res.json({ message: 'Product created', id: this.lastID });
        });
});

// List all products
app.get('/products', (req, res) => {
  const sql = `SELECT * FROM products`;
    db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get a single product by ID
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM products WHERE id = ?`;
    db.get(sql, [id], (err: Error | null, row: any) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row);
    });
});

// Update a product
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const sql = `UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?`;
    db.run(sql, [name, description, price, id],  (err: Error | null) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Product updated' });
    });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM products WHERE id = ?`;
    db.run(sql, [id],  (err: Error | null) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Product deleted' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});