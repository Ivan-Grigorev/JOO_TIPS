const User = require("../../models/user/user");

async function get(req, res) {
  try {
    const user = await User.findById(req.user.id);
    res
      .status(200)
      .json({ languages: user.languages, activeLanguage: user.activeLanguage });
  } catch (e) {
    console.error(`Error getting user languages: ${e.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function add(req, res) {
  try {
    const user = await User.findById(req.user.id);

    const newLanguage = req.body.language; // Язык из тела запроса
    if (!newLanguage) return res.status(400).json({ message: "Language is required." }); // prettier-ignore

    user.languages.push(newLanguage); // Добавление языка в массив
    user.languagesPoints.set(newLanguage, 0); // Добавление информации о языке и очках в languagesPoints
    await user.save(); // Сохранение изменений

    // console.log(`Language ${newLanguage} added to user ${user.name}`);
    res.status(200).json(user.languages);
  } catch (e) {
    console.log(`Error while adding language to user object: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

async function setActive(req, res) {
  try {
    const user = await User.findById(req.user.id);

    const activeLanguage = req.body.language; // Язык из тела запроса
    if (!activeLanguage) return res.status(400).json({ message: "Language is required." }); // prettier-ignore

    user.activeLanguage = activeLanguage; // Сохраняем активный язык в объекте пользователя
    await user.save(); // Сохранение изменений

    // console.log(`Successfully set active language ${activeLanguage}`);
    res.status(200).json(user.activeLanguage);
  } catch (e) {
    console.log(`Error while adding language to user object: ${e}`);
    res.status(500).json({ message: e.message });
  }
}

module.exports = { get, add, setActive };
