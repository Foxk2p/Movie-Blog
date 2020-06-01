USE moSQL_db;

INSERT INTO moviePost (title, director, genre, starring1, mpaaRating, postBody, dateTime)
VALUES ("Guardians of the Galaxy Vol. 2","James Gunn","Action, Adventure, Comedy, Sci-Fi","Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "PG-13","I really liked this movie","June 1st 2020, 2:15:33 pm"), ("Alien", "Ridley Scott", "Horror, Sci-Fi", "Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton", "R", "Super scary movie. What do you guys think?", "June 1st 2020, 2:20:35 pm"), ("Trainspotting", "Danny Boyle", "Drama", "Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd", "R", "The only good movie Ewan McGregor has made", "June 1st 2020, 2:32:13 pm");

INSERT INTO users (username, password)
VALUES ("jimmy", "Password1"), ("Ben", "anotherPassword"), ("Michael", "differentPassword"), ("Kele", "lastPassword");

INSERT INTO comments (body)
VALUES ("I completely disagree"), ("That's totally right"), ("You are so smart!")