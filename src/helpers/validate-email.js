function validateEmail(email) {
  // Создаем регулярное выражение для проверки формата электронной почты
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  // Проверяем, соответствует ли переданный email регулярному выражению
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}

export default validateEmail;
