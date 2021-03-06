import bcrypt from 'bcrypt';

const { User, Product, Image } = require('../models/models.js');

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
          email: user.email,
          accountType: user.accountType,
          business: user.business,
          personal: user.personal,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: 'Username or password does not match',
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ response: error, success: false });
  }
};
