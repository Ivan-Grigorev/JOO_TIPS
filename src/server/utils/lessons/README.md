# Lessons Utilities

This section covers the utility functions in the "utils/lessons" folder for working with lessons.

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

**isCardAlreadyExists.js**

- Checks if a card already exists in a view status array.

**isLessonExistsForToday.js**

- Checks if a lesson exists for today. Search using `userId`, `language` and `regexpCurrentDate`.

**isTodayEndOfTheMonth.js**

- Checks if today is the end of the month.

**isTodaySunday.js**

- Checks if today is Sunday.

**moveCardToNextArray.js**

- Moves a card to the next view array in the user language object in the special topic object.

## Usage

These utility functions are used by middleware and controllers for:

- Creating lessons and handling cards
- Managing topics and getting topic data
- Working with dates and times
- Fetching related user language data
- Checking lesson, card, date, and day logic
- Moving card data between view status arrays

The utils are imported and used in lessons middlewares and controllers as well they helps with validating conditions and manipulating lesson and card data.
