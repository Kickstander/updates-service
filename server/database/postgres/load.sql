COPY updates(title, body, likes, pubdate, authorid, projectid)
FROM '/Users/jelder/dev/sdc/updates-service/data.csv' DELIMITER ',' CSV;