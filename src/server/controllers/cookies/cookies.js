async function set(req, res, next) {
  try {
    const cookies = req.body; // Предполагаем, что тело запроса содержит cookies
    console.table(cookies);

    for (let cookieName in cookies) {
      // Устанавливаем каждый cookie из тела запроса
      res.cookie(cookieName, cookies[cookieName], {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
    }

    res.status(200).send({ message: "Cookies set successfully" });
  } catch (error) {
    console.error("Error setting cookies");
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { set };
