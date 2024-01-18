const BottDao = require("../dao/bottDao");

class BottService {
  constructor() {
    this.bottDao = new BottDao();
  }

  async getAll(limit) {
    return await this.bottDao.getAll(limit);
  }

  async create(bottdata) {
    return await this.bottDao.create(bottdata);
  }

  async update(id, updateData) {
    const bottData = await this.bottDao.FindById(id);
    if (!bottData) {
      throw new Error("bott not Found");
    }
    return await this.bottDao.update(id, updateData);
  }
}
module.exports = BottService;
