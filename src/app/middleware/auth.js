import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if header authorization is being sent
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Destructuring
  // Get only token before split auth Header
  const [, token] = authHeader.split(' ');

  try {
    // jwt.verify async uses callback to inform when function was finished
    // promisify transforms a callback function in a promise
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
