var check = function() {
    if (document.getElementById('password').value.length >= 6 &&
      document.getElementById('password').value == document.getElementById('confirm_password').value) {
      document.getElementById('message').innerHTML = 'Відповідність пароля!';
      document.getElementById('submit').disabled = false;
    } else {
      document.getElementById('message').innerHTML = 'Пароль має містити не менше 6 символів і збігатися з підтвердженням!';
      document.getElementById('submit').disabled = true;
    }
  }