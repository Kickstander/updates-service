DROP DATABASE if exists kickstarter;

CREATE DATABASE kickstarter;

-- USE kickstarter;

-- CREATE TABLE users
-- (
--   user_id     INT         SERIAL DEFAULT VALUE,
--   user_name   CHAR(100)   NOT NULL,
--   PRIMARY KEY (user_id)
-- );

-- CREATE TABLE projects
-- (
--   project_id   INT         SERIAL DEFAULT VALUE,
--   project_name CHAR(255)   NOT NULL,
--   owner_id     INT         NOT NULL,
--   PRIMARY KEY  (project_id),
--   FOREIGN KEY  (owner_id)  REFERENCES users(user_id)
-- );

-- CREATE TABLE updates
-- (
--   id          INT         SERIAL DEFAULT VALUE,
--   title       CHAR(255)   NOT NULL,
--   posted_by   INT         NOT NULL,
--   project     INT         NOT NULL,
--   body        TEXT        NOT NULL,
--   likes       INT         unsigned,
--   pub_date    DATETIME    NOT NULL,
--   createdAt   DATE,
--   updatedAt   DATE,
--   PRIMARY KEY (id),
--   FOREIGN KEY (posted_by) REFERENCES users(user_id),
--   FOREIGN KEY (project) REFERENCES projects(project_id)
-- );

-- -- TEST FOR DATA

-- INSERT INTO users (user_name) VALUES ('Jordan Holmes');

-- INSERT INTO projects (project_name, owner_id) VALUES ('FEC', 1);

-- INSERT INTO updates
--   (title, posted_by, project, body, likes, pub_date)
-- VALUES
--   ('This is Jordan testing', 1, 1, 'This is some text body', 200, '2014-12-14 00:00:00');


-- SELECT updates.title, updates.body, updates.likes,
-- updates.pub_date, users.user_name, projects.project_name
-- FROM updates, users, projects
-- WHERE projects.owner_id = users.user_id AND updates.posted_by = users.user_id;

-- mysql -u root < database/schema.sql

-- LOAD DATA INFILE 'seeding/users.txt' INTO TABLE users
--   FIELDS TERMINATED BY ','
--   LINES TERMINATED BY '\r'
--   IGNORE 1 LINES;