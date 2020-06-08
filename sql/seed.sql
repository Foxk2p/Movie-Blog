USE moSQL_db;

INSERT INTO users (username, first_name, last_name)
VALUES ("jimmy", "jimbo", "idk"), ("Ben", "Ben", "R"), ("mpljungh", "Michael", "L"), ("Kele", "K", "Kele");

INSERT INTO moviePost (userId, title, poster, year, director, genre, starring, plot, mpaaRating, postBody, dateTime)
VALUES (1, "Guardians of the Galaxy Vol. 2", "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg", "2017", "James Gunn","Action, Adventure, Comedy, Sci-Fi","Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "movie plot", "PG-13","I really liked this movie","June 1st 2020, 2:15:33 pm"),
(2, "Alien", "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "1979", "Ridley Scott", "Horror, Sci-Fi", "Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton", "movie plot", "R", "Super scary movie. What do you guys think?", "June 1st 2020, 2:20:35 pm"),
(3, "Trainspotting", "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "1996", "Danny Boyle", "Drama", "Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd", "movie plot", "R", "The only good movie Ewan McGregor has made", "June 1st 2020, 2:32:13 pm");


INSERT INTO comments (userId, moviePostId, body)
VALUES (1,1, "I completely disagree"), (2, 1, "That's totally right"), (2, 2, "You are so smart!")