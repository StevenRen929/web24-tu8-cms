const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 100,               // Limit each IP to 100 requests per window (15 minutes)
  standardHeaders: true,    // Send rate limit headers
  legacyHeaders: false,     // Disable legacy headers
});

module.exports = limiter;  // Exporting the limiter function directly