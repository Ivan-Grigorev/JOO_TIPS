function showMessageEvent() {
    if (confirm(`Шановний ${document.getElementById('username').value}!\n'Чемпіонат' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}

function showMessageExam() {
    if (confirm(`Шановний ${document.getElementById('username').value}!\n'Іспит' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}

function showMessageRating() {
    if (confirm(`Шановний ${document.getElementById('username').value}!\n'Рейтинг' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}

function showMessageMentor(){
    if (confirm(`Шановний ${document.getElementById('username').value},\n'Наставник' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}

function showMessagePvp(){
    if (confirm(`Шановний ${document.getElementById('username').value},\n'PvP' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}

function showMessageTvt(){
    if (confirm(`Шановний ${document.getElementById('username').value},\n'TvT' доступний лише в платній версії.\n\nВідкрити сторінку магазину?`)) {
        location.href = 'http://192.168.0.115:8000/ua/users-store/';
    }
}
