function parseRow(row) {
  try {
    const [language, topic, text, example, questionText, answerText] = row;

    // Парсинг answerText
    const answerMatch = answerText.match(/\[(.*?)\]/);
    const answerDifficult = (answerMatch || [])[1]?.toLowerCase();
    const isCorrect = answerText.includes("[CORRECT]");
    const optionText = answerText.match(/\[.*?\] \[.*?\] (.*)/)[1];

    return {
      language,
      topic,
      text,
      example,
      questionText,
      answerDifficult,
      isCorrect,
      optionText,
    };
  } catch (error) {
    console.error(`Error parsing row: ${error}`.red);
  }
}

module.exports = parseRow;
