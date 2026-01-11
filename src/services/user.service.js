import userRepository from '../repositories/user.repository.js';
import createError from '../utils/app-error.js';

export default {
  async createUser(data) {
    if (!data.name || !data.email || !data.password) {
      throw createError('Nome, email e senha são obrigatórios', 400);
    }

    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
      throw createError('Email já cadastrado', 409);
    }

    return userRepository.create(data);
  },

  async listUsers() {
    return userRepository.findAll();
  },

  async getUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw createError('Usuário não encontrado', 404);
    }
    return user;
  },

  async updateUser(id, data) {
    const user = await userRepository.updateById(id, data);
    if (!user) {
      throw createError('Usuário não encontrado', 404);
    }
    return user;
  },

  async deleteUser(id) {
    const user = await userRepository.deleteById(id);
    if (!user) {
      throw createError('Usuário não encontrado', 404);
    }
    return user;
  },
};
