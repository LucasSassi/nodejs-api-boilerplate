import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/user.repository.js';
import createError from '../utils/app-error.js';

export default {
  async register(data) {
    const { name, email, password } = data;

    if (!name || !email || !password) {
      throw createError('Name, email and password are required', 400);
    }

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw createError('Email already registered', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
      role: data.role || 'user',
    });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  },

  async login(data) {
    const { email, password } = data;

    if (!email || !password) {
      throw createError('Email and password are required', 400);
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw createError('Invalid credentials', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw createError('Invalid credentials', 401);
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  },
};
