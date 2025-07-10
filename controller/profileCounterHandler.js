const Counter = require('../Database/counterMode');

const profileCounterHandler = async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: 'profileCounter' },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    return res.json({ count: counter.count });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = profileCounterHandler;
