const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

const bookActivity = async (req, res) => {
  const { activityId } = req.body;
  const userId = req.user.id;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    const booking = new Booking({
      user: userId,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMyBookings = async (req, res) => {
  const userId = req.user.id;

  try {
    const bookings = await Booking.find({ user: userId }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { bookActivity, getMyBookings };