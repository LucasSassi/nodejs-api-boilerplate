import mongoose from 'mongoose';
import createError from '../utils/app-error.js';

export function ensureValidId(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(createError('Invalid ID format', 400));
  }
  next();
}
