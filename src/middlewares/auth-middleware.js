import jwt from 'jsonwebtoken';
import createError from '../utils/app-error.js';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return next(createError('Token not provided', 401));
  }

  const token = authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7) 
    : authHeader;

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return next(createError('JWT_SECRET not configured', 500));
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return next(createError('Invalid or expired token', 401));
  }
}

export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return next(createError('User not authenticated', 401));
    }

    if (roles.length === 0) {
      return next();
    }

    if (!roles.includes(req.user.role)) {
      return next(createError('Access denied. Insufficient permissions', 403));
    }

    next();
  };
}
