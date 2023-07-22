const { encrypt } = require("../../utils/encrypt");
const { obfuscate } = require("../../utils/obfuscate");

async function set(req, res, next) {
  try {
    const cookies = req.body;
    const setCookies = {};

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

    for (let cookieName in cookies) {
      const cookieValue = cookies[cookieName];

      res.cookie(cookieName, cookieValue, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      setCookies[cookieName] = cookieValue; // Добавляем установленные куки в объект

      // ! encrypted & obfuscated var below
      // // Шифруем и обфусцируем значение cookie
      // const encryptedValue = await encrypt(String(cookieValue));
      // const obfuscatedName = obfuscate(cookieName);
      // const obfuscatedValue = obfuscate(encryptedValue);

      // // Устанавливаем cookie с обфусцированным именем и значением
      // res.cookie(obfuscatedName, obfuscatedValue, {
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: "strict",
      // });

      // setCookies[obfuscatedName] = obfuscatedValue;
    }

    res.status(200).send({ message: "Cookies set successfully" });
  } catch (error) {
    console.error("Error setting cookies");
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { set };
