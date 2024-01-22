const UserDao = require("../dao/UserDao");
const httpStatus = require("http-status");

class UserService {
  constructor() {
    this.userDao = new UserDao();
  }

  getUserData = async (email) => {
    let user = await this.userDao.findByEmail(email);
    return user;
  };

  loginWithUsernamePassword = async (username, password) => {
    try {
      let message = "Login Successful";
      let statusCode = httpStatus.OK;
      let user = await this.userDao.findByUsername(username);

      if (user == null) {
        return {
          statusCode: 400,
          response: {
            status: false,
            code: httpStatus.BAD_REQUEST,
            message: "Invalid Username!",
          },
        };
      }

      if (user.password === password) {
        delete user.password;
        console.log(user.password, "))))))))))))))))))))))");

        return {
          statusCode,
          response: {
            status: true,
            code: statusCode,
            message,
            data: user,
          },
        };
      } else {
        return {
          statusCode: 400,
          response: {
            status: false,
            code: 400,
            message: "invalid UserPassword ",
          },
        };
      }
    } catch {
      return {
        statusCode: httpStatus.BAD_GATEWAY,
        response: {
          status: true,
          code: httpStatus.BAD_GATEWAY,
          message: "Something Went Wrong!!",
        },
      };
    }
  };
}

module.exports = UserService;
