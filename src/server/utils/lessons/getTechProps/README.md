# getTechProps

This directory contains the logic for obtaining technical properties related to lessons.

## Files

**getTechProps.js**

- Retrieves all technical information about lessons and topics.
- Calls helper functions from the "utils" directory.

## Utils

**getLessonConfig.js**

- Retrieves lesson settings from the database.

**getTopicsByLanguage.js**

- Retrieves the list of topics for a language.

**getTopicsChances.js**

- Retrieves the chances of selecting topics.

**getTopicsToChooseAmount.js**

- Retrieves the number of topics to choose for lessons.

## Usage

`getTechProps()` is called before creating lessons to obtain all necessary technical parameters, such as:

- Lesson configuration
- List of topics
- Topic selection probabilities
- Number of topics to choose for lessons

This data is then used in generating lessons and cards.
