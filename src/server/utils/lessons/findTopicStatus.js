function findTopicStatus(userLanguageObject, cardTopicRef) {
  const output = userLanguageObject.topicStatuses.find(
    (topic) => topic.ref.toString() === cardTopicRef.toString()
  );

  return output;
}

module.exports = findTopicStatus;
