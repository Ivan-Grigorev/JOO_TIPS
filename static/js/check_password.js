var check = function() {
    if (document.getElementById('password').value.length >= 6 &&
        document.getElementById('password').value == document.getElementById('confirm_password').value) {
            document.getElementById('message').innerHTML = 'Password matching!';
            document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('message').innerHTML = 'Password must be min 6 symbols and match with confirm!';
        document.getElementById('submit').disabled = true;
    }
}
