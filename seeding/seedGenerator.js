const faker = require('faker');

const LIKES_LIMIT = 500;

function getName() {
  return faker.name.findName();
}

function getLikes(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getUpdateBody() {
  const paragraphCount = Math.floor(Math.random() * 13) + 2; // from 2 to 15 paragraphs
  return faker.lorem.paragraphs(paragraphCount);
}

function getTitle() {
  return faker.hacker.phrase();
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getUpdateData() {
  return {
    title: getTitle(),
    posted_by: getName(),
    project: getTitle(),
    body: getUpdateBody(),
    likes: getLikes(LIKES_LIMIT),
    pub_date: randomDate(new Date(2009, 3, 28), new Date())
  };
}

const data = getUpdateData();
Object.keys(data).forEach(datum => {
  console.log('KEY NAME:', datum, '\n', data[datum]);
});

// console.log(getUpdateData());

module.exports.getName = getName;
module.exports.getLikes = getLikes;
module.exports.getUpdateBody = getUpdateBody;
module.exports.getTitle = getTitle;
