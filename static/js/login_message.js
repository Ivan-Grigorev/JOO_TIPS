function showMessage () {
    if (confirm("Hello dear Guest,\nFor get possibility to register on our website you need to pass your first test.\n\nLet`s try it?")) {
      location.href = 'http://192.168.1.46:8002/programming-language-choice/';
    }
}

function showMessageUa (){
    if (confirm("Привіт, шановний Гість,\nЩоб отримати можливість зареєструватися на нашому веб-сайті, потрібно пройти перший тест.\n\nСпробуємо?")) {
      location.href = 'http://192.168.1.46:8002/ua/programming-language-choice/';
    }
}
