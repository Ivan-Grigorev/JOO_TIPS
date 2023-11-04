# Lessons Utils

This folder contains utility functions for working with lessons.

## Files

**addNewTopic.js**

- Adds a new active topic for the user.

**calculateDaysDifference.js**

- Calculates the difference in days between two dates.

**createLessons.js**

- Creates `daily`, `weekly`, and `monthly lessons`.

**findTopicStatus.js**

- Finds a topic status object by ID.

**getCardsTopics.js**

- Retrieves topics related to an array of cards.

**getCurrentDate.js**

- Retrieves the formatted current date and related information.

**getDaysInMonthAndWeek.js**

- Retrieves arrays of days in the current month and week.

**getLastActiveTopic.js**

- Retrieves the last active topic object.

**getTakenCards.js**

- Retrieves unique card IDs from the user's lessons.

**getUserLanguagesInfo.js**

- Retrieves the user's language object and active topics.

**isTodayEndOfMonth.js**

- Checks if today is the end of the month.

## Usage

These utility functions are used by middleware and controllers for:

- Creating lessons and handling cards
- Managing topics and getting topic data
- Working with dates and times
- Fetching related user language data

The utils are exported and imported where needed in the codebase.
