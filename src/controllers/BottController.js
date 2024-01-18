const BottService = require("../service/bottService");

class BottController {
  constructor() {
    this.bottService = new BottService();
  }

  update = async (req, res) => {
    const { id } = req.params;
    try {
      const Bott = await this.bottService.update(id, req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: "successfully update bott",
        data: Bott,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: true,
        message: "internalServerError",
        error: error.message,
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
      const Bott = await this.bottService.getAll(limit);
      res.status(200).json({
        status: 200,
        success: true,
        message: "successfully get bott",
        data: Bott,
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

  create = async (req, res) => {
    try {
      let requestBody = req.body;
      if (!Array.isArray(requestBody)) {
        requestBody = [requestBody];
      }
      const Bott = await Promise.all(
        requestBody.map((a) => this.bottService.create(a))
      );
      res.status(200).json({
        status: 200,
        success: true,
        message: "successfully added bott",
        data: Bott,
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

module.exports = new BottController();
