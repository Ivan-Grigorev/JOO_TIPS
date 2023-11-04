# Controllers

This directory contains the controller files that handle requests for API endpoints.

## Structure

- `auth/` - Authentication and user account controllers
  - `auth.js`
- `cookies/` - Cookies controllers
  - `cookies.js`
- `languages/` - User languages controllers
  - `languages.js`
- `lessons/` - Lessons controllers
  - `lessons.js`
- `referral/` - Referral controllers
  - `referral.js`

## Controllers

### auth.js

Handles user authentication and account management.

- User registration, login, logout
- Account recovery
- User profile updates
- Subscription management
- Changing user password

### cookies.js

Manages setting and modifying cookies.

- Sets cookies from request body
- Encrypts/obfuscates cookie values

### languages.js

Manages user's languages.

- Gets user's languages
- Sets user's active language
- Adds new languages

### lessons.js

Manages user's lessons.

- Gets user's lessons
- Starts/finishes lessons
- Adds lesson points
- Updates lesson card statuses

### referral.js

Manages user referrals.

- Increases user's referral count

## Usage

These controllers are used by route handlers to process requests
and return responses. Input validation is done via express-validator.
