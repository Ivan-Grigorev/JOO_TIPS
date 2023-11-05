# Models

This folder contains MongoDB models representing application data entities.

## Structure

Models are organized into subfolders based on their semantic blocks:

- `Card` - Models related to cards
- `Lessons` - Models for lessons
- `Tech` - Technical reference data
- `User` - User model

## Model Descriptions

### Card

**Answer.js**

Represents an answer for a card's question. It contains:

- Answer text
- Flag indicating whether the answer is correct

**Card.js**

Represents an educational card. It contains:

- Card language
- Theme
- Card text
- Code example
- Links to questions

**Question.js**

Represents a question for a card. It contains:

- Question text
- Links to answers

These models are used for representing and storing educational cards.

### Lessons

**lessons.js**

Represents a user's lesson. It contains:

- User ID
- Lesson points
- Lesson language
- Links to cards in the lesson
- Lesson date and time
- Lesson status
- Duration

Used to store information about user lessons.

### Tech

**LanguagesList.js**

Contains a list of available learning languages.

**LessonConfig.js**

Stores lesson configuration - number of cards, duration, etc.

**TopicsChances.js**

Contains probability formulas for topic selection in lessons.

**TopicsList.js**

A reference for themes and topics for each language.

**TopicsToChooseAmount.js**

Stores the number of topics to choose in lessons.

Technical reference data used in the application's logic.

Next, I will proceed to describe the user model.
