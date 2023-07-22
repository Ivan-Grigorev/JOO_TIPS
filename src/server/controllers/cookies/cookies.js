async function set(req, res, next) {
  try {
    const cookies = req.body; // Предполагаем, что тело запроса содержит cookies
    const setCookies = {}; // Создаём объект для сохранения установленных кук

    for (let cookieName in cookies) {
      // Устанавливаем каждый cookie из тела запроса
      const cookieValue = cookies[cookieName];
      res.cookie(cookieName, cookieValue, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      setCookies[cookieName] = cookieValue; // Добавляем установленные куки в объект
    }

    res.status(200).send({ message: "Cookies set successfully" });
  } catch (error) {
    console.error("Error setting cookies".red);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { set };
