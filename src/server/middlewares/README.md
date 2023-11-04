Inside the `middlewares` directory, we have several middleware functions that handle user authentication, account management, and related tasks in our MERN (MongoDB, Express, React, Node.js) application.
These middleware functions are designed to be used in our API endpoints to enhance security and user interactions.

Here is an overview of the middleware functions:

## Files

### auth.js

Middleware Functions for User Authentication and Account Management

This JavaScript module is responsible for managing user authentication and account-related functionality. It features the following key tasks:

- **_Validation:_** Validates user authentication using JSON Web Tokens (JWT).
- **Token Verification:** Verifies the authenticity of the provided JWT token using the application's secret key.
- **Request Handling:** Attaches decoded user information to the request object upon successful authentication.
- **Authentication Tasks:** Manages various authentication-related tasks, including user registration, login, and password recovery.
- **Security Measures:** Implements security measures to protect against unauthorized access and misuse of tokens.
- **Error Handling:** Logs errors and responds with appropriate HTTP status codes in case of authentication failures or internal server errors.

  This module is crucial for ensuring the security and integrity of user accounts and interactions within our MERN application.

### csrf.js

This JavaScript module serves as a middleware for verifying the presence of an active session and checking the CSRF (Cross-Site Request Forgery) token. It includes the following core functionality:

- **Session Validation:** It ensures that an active session exists. If there is no active session, it responds with an error message indicating that the session has expired and advises the user to log in again.
- **CSRF Token Check:** This middleware is used to protect against CSRF attacks. It validates the presence of a CSRF token in the request, ensuring that requests come from trusted sources.
- **Passing Control:** If a valid session and CSRF token are present, it allows the request to proceed to the next middleware in the chain.

This module is crucial for enhancing the security of our application by preventing unauthorized access and protecting against CSRF attacks.

### languages.js

Middleware for checking if a new language is unique for a user

This JavaScript module serves as a middleware for checking whether a new language is unique for a user. It includes the following core functionality:

- **User Validation:** During the execution of this middleware, user information is obtained based on their identifier.
- **Uniqueness Check:** It checks whether the user's list of languages already includes the new language. If the user already has the specified language in their list, a message is logged, and a 409 status code with an error message is returned.
- **Passing Control:** If the new language is unique for the user, the middleware allows the request to proceed to the next middleware.

This module is essential for ensuring the uniqueness of languages in the user's list and preventing duplicates.

### lessons.js

Contains middlewares for working with lessons:

- Check lesson exists by ID
- Check if lesson already completed
- Check if schedule exists for current week
- Create schedule until end of week
- Validate and manage active topics
- Check card ID and topic provided in request

### profile.js

Check uniqueness of user fields: **_Email_**, **_Username_**, **_Phone number_**

### referral.js

- Check if a user exists by username for referrals.

### updateLastOnlineTime.js

- Updates user's last online time.

## Usage

These middleware functions are used for:

- Validating request data
- Checking business logic and rules
- Preparing and standardizing data
- Handling errors and responses

They are called between receiving a request and its handling in route handlers.
