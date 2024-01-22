const model = require("../model");
const User = model.user;

class UserDao {
  constructor() {}

  findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  findByUsername(username) {
    return User.findOne({ where: { username } });
  }
}

module.exports = UserDao;
