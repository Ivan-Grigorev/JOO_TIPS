function showMessageEvent() {
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'Event' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}

function showMessageExam() {
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'Exam' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}

function showMessageRating() {
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'Rating' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}

function showMessageMentor() {
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'Mentor' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}

function showMessagePvp(){
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'PvP' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}

function showMessageTvt(){
    if (confirm(`Dear ${document.getElementById('username').value},\nThe 'TvT' available only in paid version.\n\nOpen store page?`)) {
        location.href = 'http://192.168.0.115:8000/users-store/';
    }
}
