const Model = require("../model");

const user = Model.user;
const bott = Model.bott;
class UserController {
  create = async (req, res) => {
    try {
      const User = await user.create(req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: "successfully added bott",
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

  getAll = async (req, res) => {
    try {
      const User = await user.findAll({
        include: { model: bott, as: "bottData" },
      });
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
