const faker = require('faker');

const LIKES_LIMIT = 500;
const KICKSTARTER_FOUNDED = new Date(2009, 3, 28);

function getUpdateData() {
  const date = randomDate(KICKSTARTER_FOUNDED, new Date());

  return {
    title: getTitle(),
    posted_by: getName(),
    project: getTitle(),
    body: getUpdateBody(),
    likes: getLikes(LIKES_LIMIT),
    pub_date: formatDateForSQL(date)
  };
}

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

function intPadLeft(num, base, chr) {
  const len = String(base || 10).length - String(num).length + 1;
  return len > 0 ? new Array(len).join(chr || '0') + num : num;
}

function formatDateForSQL(date) {
  const year = date.getFullYear();
  const month = intPadLeft(date.getMonth() + 1);
  const day = intPadLeft(date.getDate());

  // 'YYYY-MM-DD HH:MM:SS'
  return `${year}-${month}-${day} ${'00'}:${'00'}:${'00'}`;
}

const data = getUpdateData();

Object.keys(data).forEach(datum => {
  console.log('KEY NAME:', datum, '\n', data[datum]);
});

module.exports.getName = getName;
module.exports.getLikes = getLikes;
module.exports.getUpdateBody = getUpdateBody;
module.exports.getTitle = getTitle;
