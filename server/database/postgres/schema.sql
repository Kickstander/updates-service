
CREATE TABLE IF NOT EXISTS updates (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  likes INTEGER NOT NULL,
  pubDate DATE NOT NULL,
  authorId INTEGER NOT NULL,
  projectId INTEGER NOT NULL
);