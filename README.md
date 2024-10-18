# JOO TIPS

**JOO TIPS** is a private commercial start-up that creates and develops a programming language learning platform. The platform helps users develop their understanding of code and improve syntax through regular, daily exercises directly on their phones.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Supported Languages](#supported-languages)
- [Technologies](#technologies)
- [Secret Key Management](#secret-key-management)
- [License](#license)
- [Copyright](#copyright)
- [Author](#author)

## Project Overview

The **JOO TIPS** application provides users with a platform to learn various programming languages through a combination of theoretical learning and practical tasks. Users can select their preferred programming language and follow a structured learning plan tailored to their needs.

Initially, the app was created for use in Ukraine but is available in both Ukrainian and English to cater to international users.

### Learning Flow
1. **Theory Cards**: Users start by learning the theory of a programming language via theory cards.
2. **Theoretical and Practical Tasks**: Users then complete theoretical and practical exercises.
3. **Progress Tracking**: At the end of the learning session, users receive feedback and statistics on their progress.

## Features
- Daily programming exercises accessible via mobile devices.
- Support for multiple programming languages.
- Bilingual support (Ukrainian and English).
- Personalized learning plans based on the user's preferred programming language.
- Progress tracking and statistics.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Ivan-Grigorev/JOO_TIPS.git
    cd JOO_TIPS
    ```

2. Set up a virtual environment:

    ```bash
    python3 -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:

    ```bash
    python manage.py migrate
    ```

5. Create a superuser to access the admin panel:

    ```bash
    python manage.py createsuperuser
    ```

6. Start the development server:

    ```bash
    python manage.py runserver
    ```

7. Visit `http://127.0.0.1:8000/` in your browser to view the platform, and access the admin panel at `http://127.0.0.1:8000/admin`.

## Usage

The platform allows users to log in, select their favorite programming language, and follow a personalized learning plan. They can complete exercises, track their progress, and improve their coding skills.

## Supported Languages

The following programming languages are taught by the **JOO TIPS** app:

- C
- C+
- C#
- Go
- Java
- JavaScript
- PHP
- Python
- Swift

## Technologies

- **Django**: Backend framework for managing the web application.
- **SQLite/MySQL/PostgreSQL**: Database for storing user data and learning statistics.
- **HTML/CSS/JavaScript**: Front-end technologies for displaying the user interface.
- **Mobile-first Design**: Optimized for mobile devices for a seamless learning experience on the go.

## Secret Key Management

To securely manage the Django `SECRET_KEY`, it is stored in a `secret_key.txt` file located in the root directory. The `settings.py` file automatically reads the key from this file.

Make sure to add `secret_key.txt` to your `.gitignore` to prevent it from being exposed in a public repository:

```bash
echo "secret_key.txt" >> .gitignore
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Copyright

© 2024 **JOO TIPS Development Team**. All rights reserved.

While this project is released under the MIT License, all branding, logos, and trademarks used by the **JOO TIPS** platform remain the exclusive property of the development team. Unauthorized use of these elements is prohibited.

## Author

This repository was built and is maintained by [Ivan Grigorev](https://github.com/Ivan-Grigorev).
