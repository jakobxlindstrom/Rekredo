import bcrypt from 'bcrypt';

const {
  PersonalUser,
  BusinessUser,
  Product,
  Image,
} = require('./models/models.js');

export const registerPersonalUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    if (!email) {
      throw 'Please enter an email';
    }

    if (!username) {
      throw 'Please enter a username';
    }

    const newUser = await new PersonalUser({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    console.log(error, 'personaluser error');
    if (error.code === 11000) {
      res.status(401).json({ success: false, response: error });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};

export const registerBusinessUser = async (req, res) => {
  const { businessName, password, email, location, vatNumber } = req.body;
  console.log(req.body, 'reqbody of registerbusiness l55');

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    if (!businessName) {
      throw 'Please enter a business name';
    }

    if (!email) {
      throw 'Please enter an email';
    }

    const newUser = await new BusinessUser({
      businessName,
      password: bcrypt.hashSync(password, salt),
      businessEmail: email,
      location,
      vatNumber,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.businessName,
        email: newUser.businessEmail,
        location: newUser.location,
        vatNumber: newUser.vatNumber,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(401).json({ success: false, response: "this business name already exists" });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};
