function findTopicStatus(userLanguageObject, cardTopicRef) {
  const topicObject = userLanguageObject.topicStatuses.find(
    (topic) => topic.ref.toString() === cardTopicRef.toString()
  );

  return topicObject;
}

module.exports = findTopicStatus;
