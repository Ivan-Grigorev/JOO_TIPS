# Algorithm

This folder contains the algorithm for selecting cards for user lessons and related utility functions.

## Algorithm.js

The main algorithm function that:

- Takes in an array of card IDs, the number to select, and card chances.
- Calculates a probability distribution based on chances.
- Randomly selects cards based on calculated probabilities.
- Returns an array of selected card IDs.

## Utils

**getCardProbability.js**

- Calculates the probability of selecting each card within a topic.

**getCardsByActiveTopics.js**

- Gets cards based on the user's active topics and predefined topic chances.
- Calculates card probabilities within each topic.
- Randomly selects cards based on probabilities.

**selectRandomCardsByProbability.js**

- A random selection helper based on card probabilities.

**setTopicProbability.js**

- Sets the probability for selecting a topic based on its position.

## Usage

The main Algorithm function is called with the required parameters to generate card selections.

The utility functions help support the algorithm by handling card probability calculations and random selection.

The algorithm ensures a good distribution of cards based on topic activation time and chances.
