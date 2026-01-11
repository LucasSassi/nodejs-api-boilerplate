import User from '../models/user.model.js';

export default {
  async create(data) {
    return User.create(data);
  },

  async findAll() {
    return User.find();
  },

  async findById(id) {
    return User.findById(id);
  },

  async findByEmail(email) {
    return User.findOne({ email });
  },

  async updateById(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },

  async deleteById(id) {
    return User.findByIdAndDelete(id);
  },
};
