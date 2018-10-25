DROP DATABASE if exists kickstarter;

CREATE DATABASE kickstarter;

USE kickstarter;

CREATE TABLE updates
(
  id          INT         SERIAL DEFAULT VALUE,
  title       CHAR(255)   NOT NULL,
  posted_by   CHAR(100)   NOT NULL,
  project     CHAR(255)   NOT NULL,
  body        TEXT        NOT NULL,
  likes       INT         unsigned,
  pub_date    DATETIME    NOT NULL,
  createdAt   DATE,
  updatedAt   DATE,
  PRIMARY KEY (id)
);

  INSERT INTO updates
    (title, posted_by, project, body, likes, pub_date)
  VALUES
    ('This is Jordan testing', 'Jordan The Bomb Holmes', 'Testing 123', 'This is some text body', 200, '2014-12-14 00:00:00');

-- mysql -u root < server/schema.sql