# getViewedPercent

This directory contains logic to calculate the percentage of viewed cards for each active topic.

## Files

**getViewedPercent.js**

- The main function orchestrating viewed percentage calculation.
- Calls utility functions from the `utils/` directory.

## Utils

**calculateViewedCardsCount.js**

- Calculates the count of viewed cards based on view status.

**getTopicStatusInfo.js**

- Retrieves view status and card view statuses for a topic.

**getTotalCardsCount.js**

- Fetches the total card count for a topic from the database.

**getViewedCardsByTopic.js**

- Calculates viewed cards and the percentage per topic.

## Usage

`getViewedPercent()` is called with the user's language information.

It calculates:

- Total cards per active topic.
- Viewed cards based on status.
- Percentage viewed using the total and viewed counts.

It returns an object with detailed view data per topic.

This is used to track the user's topic progress.
