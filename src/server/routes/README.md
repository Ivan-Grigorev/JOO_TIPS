# Routes

This folder contains request routing files using the Express.js framework.

## Structure

Routes are organized into subfolders based on their functional blocks:

- `auth` - authentication routes
- `languages` - routes for working with languages
- `profile` - user profile routes
- `subscription` - subscription routes

## Route Descriptions

**auth.js**

Defines the core routes:

- User registration
- Authentication
- Logout

**profile.js**

Routes for working with user profiles:

- Fetching current user data
- Updating the profile
- Account deletion

**recover.js**

Routes for password recovery:

- Requesting a password reset email
- Validating the reset token
- Setting a new password

**subscription.js**

Routes for subscription management:

- Fetching subscription data
- Updating the subscription
- Resetting the subscription to default values

**cookies.js**

Route for working with cookies:

- Setting cookies

**lessons.js**

Core routes for working with lessons:

- Fetching user lessons
- Getting points for active lessons
- Starting and finishing a lesson

**referral.js**

Route for handling referrals:

- Increasing the user's referral count

Thus, the routes in this directory define the main routes of the application for working with different entities and processes.

Routes utilize middleware functions for validation, authentication, and handle requests using respective controllers.
