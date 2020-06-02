USE moSQL_db;

INSERT INTO users (username, password)
VALUES ("jimmy", "Password1"), ("Ben", "anotherPassword"), ("Michael", "differentPassword"), ("Kele", "lastPassword");

INSERT INTO moviePost (userId, title, director, genre, starring, plot, mpaaRating, postBody, dateTime)
VALUES (1, "Guardians of the Galaxy Vol. 2","James Gunn","Action, Adventure, Comedy, Sci-Fi","Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "movie plot", "PG-13","I really liked this movie","June 1st 2020, 2:15:33 pm"),
(2, "Alien", "Ridley ScmoviePostott", "Horror, Sci-Fi", "Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton", "movie plot", "R", "Super scary movie. What do you guys think?", "June 1st 2020, 2:20:35 pm"),
(3, "Trainspotting", "Danny Boyle", "Drama", "Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd", "movie plot", "R", "The only good movie Ewan McGregor has made", "June 1st 2020, 2:32:13 pm");


INSERT INTO comments (userId, moviePostId, body)
VALUES (1,1, "I completely disagree"), (2, 1, "That's totally right"), (2, 2, "You are so smart!")