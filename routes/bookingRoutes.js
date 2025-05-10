const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');
const { validateBooking } = require('../middleware/validate');

router.post('/', authMiddleware, validateBooking, bookActivity);
router.get('/my-bookings', authMiddleware, getMyBookings);

module.exports = router;