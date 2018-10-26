const faker = require('faker');
const fs = require('fs');

const USERS_HEADERS = "user_id,user_name";
const PROJECTS_HEADERS = "project_id,project_name,owner_id";
const UPDATES_HEADERS = "id,title,posted_by,project,body,likes,pub_date,createdAt,updatedAt";
const LIKES_LIMIT = 500;
const BODY_PARAGRAPH_MAX = 15;
const BODY_PARAGRAPH_MIN = 2;
const MIN_UPDATES = 0;
const MAX_UPDATES = 10;
const KICKSTARTER_FOUNDED = new Date(2009, 3, 28);

var updateCount = 0;

function getName() {
  return faker.name.findName();
}

function getLikes(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getUpdateBody() {
  // from 2 to 15 paragraphs
  const paragraphCount =
    Math.floor(Math.random() * BODY_PARAGRAPH_MAX - BODY_PARAGRAPH_MIN) + BODY_PARAGRAPH_MIN;
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

function generateUserData(userIdx) {
  return [userIdx, getName()];
}

function generateProjectData(userIdx, projectIdx) {
  return [projectIdx, getTitle(), userIdx];
}

function getUpdateData(userIdx, projectIdx) {
  const date = randomDate(KICKSTARTER_FOUNDED, new Date());
  updateCount += 1;

  return [
    updateCount,
    getTitle(),
    userIdx,
    projectIdx,
    getUpdateBody(),
    getLikes(LIKES_LIMIT),
    formatDateForSQL(date)
  ];
}

function generateUpdates(userIdx, projectIdx) {
  const numOfUpdates = randomNum(MIN_UPDATES, MAX_UPDATES);
  const updates = [];

  for (let i = 0; i < numOfUpdates; i += 1) {
    updates.push(getUpdateData(userIdx, projectIdx));
  }
  return updates;
}

function generateAllSeedStrings(num) {
  const data = {
    users: [USERS_HEADERS],
    projects: [PROJECTS_HEADERS],
    updates: [UPDATES_HEADERS]
  };

  for (let i = 1; i <= num; i += 1) {
    data.users.push(generateUserData(i).join(';'));
    data.projects.push(generateProjectData(i, i).join(';'));

    generateUpdates(i, i).forEach(update => {
      data.updates.push(update.join(';'));
    });
  }

  return data;
}

let data = generateAllSeedStrings(100);

fs.writeFile('seeding/users.txt', data.users.join('\r'), err => {
  if (err) throw err;
  console.log('file saved!');
});

fs.writeFile('seeding/projects.txt', data.projects.join('\r'), err => {
  if (err) throw err;
  console.log('file saved!');
});

fs.writeFile('seeding/updates.txt', data.updates.join('\r'), err => {
  if (err) throw err;
  console.log('file saved!');
});
