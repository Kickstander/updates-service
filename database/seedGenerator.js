// const fs = require('fs');
const model = require('./db.js');

// const USERS_HEADERS = "userId,userName";
// const PROJECTS_HEADERS = "projectId,projectName,ownerId";
// const UPDATES_HEADERS = "id,title,postedBy,projectId,body,likes,pubDate,createdAt,updatedAt";






const data = generateAllSeedData(100);

model.User.bulkCreate(data.users);
model.Project.bulkCreate(data.projects);
model.Update.bulkCreate(data.updates);


// fs.writeFile('database/users.txt', data.users.join('\r'), err => {
//   if (err) throw err;
//   console.log('file saved!');
// });

// fs.writeFile('database/projects.txt', data.projects.join('\r'), err => {
//   if (err) throw err;
//   console.log('file saved!');
// });

// fs.writeFile('database/updates.txt', data.updates.join('\r'), err => {
//   if (err) throw err;
//   console.log('file saved!');
// });
