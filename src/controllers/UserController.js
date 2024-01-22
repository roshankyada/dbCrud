const Model = require("../model");
const UserService = require("../service/userService");
const jwt = require("jsonwebtoken");
const user = Model.user;
const bott = Model.bott;
class UserController {
  constructor() {
    this.userService = new UserService();
  }

  login = async (req, res) => {
    const { username, password } = req.body;
    const user = await this.userService.loginWithUsernamePassword(
      username,
      password
    );
    const { data } = user.response;
    const { message } = user.response;
    const { status } = user.response;
    const code = user.statusCode;
    const paylod = {
      id: data?.id,
      status: "Login",
      generatedOn: new Date().getTime(),
      exp: parseInt(
        new Date().getTime() + process.env.JWT_ACCESS_EXPIRATION_MINUTES
      ),
    };
    const token = jwt.sign(paylod, process.env.JWT_SECRET);
    // const decodedToken = jwt.verify(token, "roshankyada");
    if (user.statusCode === 200) {
      res.status(user.statusCode).send({ status, code, message, data, token });
    } else {
      res.status(user.statusCode).send({ status, code, message, data });
    }
  };

  register = async (req, res) => {
    try {
      const existingUser = await this.userService.getUserData(req?.body?.email);
      console.log(existingUser, "-------------------------");
      if (existingUser) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "User already exists",
        });
      } else {
        const User = await user.create(req.body);
        res.status(200).json({
          status: 200,
          success: true,
          message: "successfully added bott",
          data: User,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        message: "internalServerError",
        error: error.message,
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const User = await user.findAll();
      res.status(200).json({
        status: 200,
        success: true,
        message: "successfully get bott",
        data: User,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        message: "internalServerError",
        error: error.message,
      });
    }
  };
}

module.exports = new UserController();
