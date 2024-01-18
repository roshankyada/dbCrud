const models = require("../model");
const Bott = models.bott;

class bottDao {
  async create(BottData) {
    return await Bott.create(BottData);
  }

  async getAll(limit) {
    const queryOptions = {};

    if (limit !== undefined && limit !== 0) {
      queryOptions.limit = limit;
    }
    return await Bott.findAll({ ...queryOptions });
  }

  async update(id, updateData) {
    return await Bott.update(updateData, { where: { id } });
  }

  async FindById(id) {
    return await Bott.findOne({ where: { id } });
  }
}

module.exports = bottDao;
