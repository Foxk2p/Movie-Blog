DROP DATABASE IF EXISTS moSQL_db;

CREATE DATABASE moSQL_db;

USE moSQL_db;

CREATE TABLE users (
  userId INT AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (userId)
);

CREATE TABLE moviePost (
  moviePostId INT AUTO_INCREMENT,
  userId INT,
  title VARCHAR(60) NOT NULL,
  director VARCHAR(60) NOT NULL,
  genre VARCHAR(60) NOT NULL,
  starring VARCHAR(100),
  plot TEXT,
  mpaaRating VARCHAR(10),
  postBody TEXT NOT NULL,
  dateTime VARCHAR(40),
  PRIMARY KEY (moviePostId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE comments (
  commentId INT AUTO_INCREMENT,
  moviePostId INT,
  userId INT,
  body TEXT NOT NULL,
  PRIMARY KEY (commentId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  FOREIGN KEY (moviePostId) REFERENCES moviePost(moviePostId)
);