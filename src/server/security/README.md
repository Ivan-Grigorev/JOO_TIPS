# Security

This folder contains middleware to implement various security measures for the application.

## Files

### morgan.js

Sets up request logging using morgan middleware.

- Creates a log file stream to `../logs/access.log`.
- Uses morgan with `'combined'` format to log requests to this file stream.

### index.js

Configures security middleware for the app:

- Rate limiting with `express-rate-limit`
- Session management with `express-session`
- Security headers with `helmet`
- Input sanitization with `mongo-sanitize` and `hpp`
- XSS protection with `content-filter`
- CORS whitelisting with `cors`
- HTTP compression with `compression`

Can also enable HTTPS redirection middleware.

Usage
These middlewares enhance application security by:

- Blocking common web vulnerabilities like XSS, SQLi, etc.
- Limiting concurrent requests to prevent brute force attacks
- Setting secure headers and enabling CORS whitelist
- Storing session data securely
- Logging incoming requests for auditing

The middlewares are attached to the `Express` app instance before routing.
