DROP DATABASE IF EXISTS moSQL_db;

CREATE DATABASE moSQL_db;

USE moSQL_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE moviePost (
  id INT AUTO_INCREMENT,
  userId INT,
  title VARCHAR(60) NOT NULL,
  poster VARCHAR(1000),
  year VARCHAR(5),
  director VARCHAR(60) NOT NULL,
  genre VARCHAR(60) NOT NULL,
  starring VARCHAR(100),
  plot TEXT,
  mpaaRating VARCHAR(10),
  postBody TEXT NOT NULL,
  dateTime VARCHAR(40),
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT,
  moviePostId INT,
  userId INT,
  body TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (moviePostId) REFERENCES moviePost(id)
);

