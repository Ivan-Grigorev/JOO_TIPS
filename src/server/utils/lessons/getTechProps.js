const getTechProps = async (db, language) => {
  try {
    // TODO оптимизировать через Promise.All()

    // беру из тех.коллекции количество тем
    const techTopics = await db
      .collection("topics_to_choose_amount")
      .findOne({});

    // беру из тех.коллекции шансы появления тех или иных карточек
    const chances = await db.collection("topics_chances").findOne({});
    // console.log("Вероятности из базы данных:", chances);

    // беру значение из объекта
    const numToSelect = techTopics.topicsToChoose;

    // получаю список тем из динамической коллекции (обновляется при парсинге)
    const topics = await db
      .collection("topics_list")
      .find({ language })
      .toArray();

    return { topics, numToSelect, chances };
  } catch (e) {
    console.error(e);
  }
};

module.exports = getTechProps;
