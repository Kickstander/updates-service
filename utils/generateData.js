const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const { Readable } = require('stream');
const {
  getLikes,
  generateDate,
  randomNum,
} = require('./seedingUtils');

const MIN_UPDATES = 2;
const MAX_UPDATES = 10;
const startTime = new Date();

class GenDataStream extends Readable {
  constructor(opt) {
    super(opt);

    this.projects = 10 * 1000000;
    this.completedProjects = 0;
    this.updateCount = 1;
    this.update = '';
  }

  _read(size) {
    const generationInterval = this.completedProjects + 100;
    if (this.completedProjects === this.projects) {
      this.push(null);
    } else {
      for (let i = this.completedProjects; i < generationInterval; i += 1) {
        this.generateData(i);
        this.completedProjects += 1;
      }
      this.push(this.update);
      this.update = '';
      // Create a percentage status
      if ((this.completedProjects) % (this.projects / 10000) === 0) {
        console.clear();
        console.log(`${((this.completedProjects / this.projects) * 100).toFixed(2)}% complete...`);
        const seconds = ((new Date() - startTime) / 1000).toFixed(0);
        const minutes = (seconds / 60).toFixed(0);
        console.log(`${minutes} minutes elapsed`);
      }
    }
  }

  generateData(i) {
    // figure out how many updates for each project
    const numberOfUpdates = randomNum(MIN_UPDATES, MAX_UPDATES);
    // generate that many updates for each project
    for (let j = 0; j < numberOfUpdates; j += 1) {
      this.update += `${[
        faker.hacker.phrase().replace(/,/g, ''), // title
        faker.lorem.paragraphs(3, '\n').replace(/\n/g, '\\n'), // body
        getLikes(), // likes
        generateDate(), // pubDate
        randomNum(1, 1000000), // authorId
        i, // projectId
      ].join(',')}\n`;
    }
  }
}

const file = fs.createWriteStream('./data.csv');

const genData = new GenDataStream();
genData.pipe(file);