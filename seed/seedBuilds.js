const mongoose = require('mongoose');
const db = require('../app_server/models/db');

const Build = mongoose.model('Build');

const builds = [
  {
    carTitle: '2016 VW Golf GTI',
    owner: 'Golf_GTI_16',
    imageUrl: '',
    category: 'Exterior',
    modifications: ['Front lip / front splitter', 'Chin spoiler', 'Side skirts']
  },
  {
    carTitle: '2012 Subaru WRX STI',
    owner: 'BoxerBoost',
    imageUrl: '',
    category: 'Engine',
    modifications: ['Cold air intake', 'Turbo-back exhaust', 'ECU tune']
  },
  {
    carTitle: '2018 Honda Civic Type R',
    owner: 'TypeR_Tom',
    imageUrl: '',
    category: 'Interior',
    modifications: ['Bucket seats', 'Harness bar', 'Carbon trim']
  },
  {
    carTitle: '2005 Mazda MX-5',
    owner: 'MiataMike',
    imageUrl: '',
    category: 'Other',
    modifications: ['Coilovers', 'Lightweight wheels', 'Roll bar']
  }
];

async function seedBuilds() {
  try {
    await db.connectToMongoDB();
    await Build.deleteMany({});
    const result = await Build.insertMany(builds);
    console.log('Added ' + result.length + ' builds');
  } catch (error) {
    console.log(error.message);
  }
  await db.disconnectFromMongoDB();
}

seedBuilds();
