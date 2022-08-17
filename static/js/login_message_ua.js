function showMessage(){
    if (confirm("Привіт, шановний Гість,\nЩоб отримати можливість зареєструватися на нашому веб-сайті, потрібно пройти перший тест.\n\nСпробуємо?")) {
      location.href = 'http://192.168.1.46:8002/ua/programming-language-choice/';
    }
  }