const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//Routes/controllers
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));
app.use('/api/bookings',require('./routes/bookingRoutes'));

//DB config
mongoose.connect(process.env.MONGO_URI,{
}) .then(()=> console.log('MongoDB is Connected'))
    .catch(()=> console.error(err));

app.get('/', (req, res) => {
  res.send('MEETX BACKEND API ASSESSMENT');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is Running  Succesfully on http://localhost:${PORT}`));
