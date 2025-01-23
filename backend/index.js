const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Ganti dengan password MySQL Anda
  database: 'schedule'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
app.post('/api/users/register', (req, res) => {
  const { nama, email, password, role, mataPelajaran, asalSekolah, kelas } = req.body;
  console.log(req.body); // Tambahkan logging di sini
  const query = 'INSERT INTO users (nama, email, password, role, mataPelajaran, asalSekolah, kelas) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nama || null, email || null, password || null, role || null, mataPelajaran || null, asalSekolah || null, kelas || null], (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(201).send({ id: result.insertId, ...req.body });
  });
});

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(400).send('Invalid credentials');
    }
    res.send(results[0]);
  });
});

app.get('/api/users/guru', (req, res) => {
  const query = 'SELECT * FROM users WHERE role = "guru"';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

app.get('/api/users/siswa', (req, res) => {
  const query = 'SELECT * FROM users WHERE role = "siswa"';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

app.post('/api/schedules', (req, res) => {
  const { hari, waktu, mataPelajaran, guruId } = req.body;
  const query = 'INSERT INTO schedules (hari, waktu, mataPelajaran, guruId) VALUES (?, ?, ?, ?)';
  db.query(query, [hari || null, waktu || null, mataPelajaran || null, guruId || null], (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(201).send({ id: result.insertId, ...req.body });
  });
});

app.get('/api/schedules', (req, res) => {
  const { guruId } = req.query;
  let query = `
    SELECT schedules.*, users.nama AS guruNama, users.mataPelajaran AS guruMataPelajaran
    FROM schedules
    JOIN users ON schedules.guruId = users.id
  `;
  const queryParams = [];
  if (guruId) {
    query += ' WHERE schedules.guruId = ?';
    queryParams.push(guruId);
  }
  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching schedules:', err);
      return res.status(500).send(err);
    }
    console.log('Schedules:', results); // Tambahkan logging di sini
    res.send(results);
  });
});

app.delete('/api/schedules/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM schedules WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({ message: 'Jadwal berhasil dihapus' });
  });
});

// New routes for selected gurus
app.post('/api/selected-gurus', (req, res) => {
  const { guruId } = req.body;
  const query = 'INSERT INTO selected_gurus (guruId) VALUES (?)';
  db.query(query, [guruId], (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(201).send({ id: result.insertId, guruId });
  });
});

app.get('/api/selected-gurus', (req, res) => {
  const query = `
    SELECT selected_gurus.*, users.nama AS guruNama, users.mataPelajaran AS guruMataPelajaran
    FROM selected_gurus
    JOIN users ON selected_gurus.guruId = users.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

app.delete('/api/selected-gurus/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM selected_gurus WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({ message: 'Guru berhasil dihapus dari pilihan' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});