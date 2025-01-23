CREATE DATABASE IF NOT EXISTS schedule;

USE schedule;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(50),
  mataPelajaran VARCHAR(255),
  asalSekolah VARCHAR(255),
  kelas VARCHAR(255),
  foto VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hari VARCHAR(50),
  waktu VARCHAR(50),
  mataPelajaran VARCHAR(255),
  guruId INT,
  FOREIGN KEY (guruId) REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS selected_gurus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  guruId INT,
  FOREIGN KEY (guruId) REFERENCES users(id)
);