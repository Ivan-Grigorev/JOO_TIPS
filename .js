// в объекте юзера
const languages = [
  {
    languageRef: "javascriptID",
    activeTopicRef: ["n", "n+1", "n+2", "n-1"],
    topicsStatuses: [
      { topicID: "topicRef1", viewStatus: 1 }, // status - n
      { topicID: "topicRef2", viewStatus: 2 }, // status n + 1
      { topicID: "topicRef3", viewStatus: 3 }, // status n + 2
      { topicID: "topicRef4", viewStatus: -1 }, // status n - 1
    ],
    cardViewStatus: {
      firstViewedCards: [
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
      ],
      twiceViewedCards: [
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
      ],
      third: [
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
      ],
      fourth: [
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
        { cardRef: "cardRef", cardTopicId: "cardTopicRef" },
      ],
    },
  },
  {
    languageRef: "pythonID",
    topicsList: [null, null, null],
  },
  {
    languageRef: "rubyID",
    topicsList: [null, null, null],
  },
];
