function selectRandomCards(cardIDs, numToSelect, weights = {}) {
  // Normalize the weights by dividing by the sum of the weights, and then multiply by the standard chance
  const totalWeight = cardIDs.reduce((sum, id) => sum + (weights[id] || 1), 0);
  const standardChance = 1 / cardIDs.length;

  // Create an array of probabilities
  const probabilities = cardIDs.map(
    (id) => ((weights[id] || 1) * standardChance) / totalWeight
  );

  // Create a cumulative probabilities array to easily select IDs based on their probability
  const cumulativeProbabilities = probabilities.reduce((arr, prob) => {
    arr.push((arr[arr.length - 1] || 0) + prob);
    return arr;
  }, []);

  // Select numToSelect random IDs based on their probabilities
  const selectedIDs = [];
  for (let i = 0; i < numToSelect; i++) {
    const random = Math.random();
    const selectedIndex = cumulativeProbabilities.findIndex(
      (prob) => prob > random
    );
    selectedIDs.push(cardIDs[selectedIndex]);
  }

  return selectedIDs;
}

export default selectRandomCards;
