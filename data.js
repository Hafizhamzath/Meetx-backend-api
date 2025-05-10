const mongoose = require('mongoose');
const Activity = require('./models/Activity');
require('dotenv').config();

const activities = [
  {
    title: 'IPL 2025',
    description: 'Match between RCB and LSG.',
    location: 'Bangalore Cricket Statdium',
    dateTime: new Date('2025-05-15T15:00:00'),
  },
  {
    title: 'Shadow Force',
    description: 'Movie starring  Mark strong, Kerry Washington and Da`Vine Joy Randolph.',
    location: 'Inox:Megaplex Mall of Asia Bnagalore',
    dateTime: new Date('2025-05-16T19:00:00'),
  },
  {
    title: 'Mandragora by Sunburn',
    description: 'Music Concert by Sunburn',
    location: 'Sunburn Union Bangalore',
    dateTime: new Date('2025-05-17T10:00:00'),
  },
];

const dataDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected');

    await Activity.deleteMany({});
    await Activity.insertMany(activities);
    console.log('Database seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

dataDB();