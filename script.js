let submitForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;



fetch('https://example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: email, password: password }),
})

  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('error-message').innerText = '';
      alert('Успешный Логин!');
    } else {
      document.getElementById('error-message').innerText = 'Неправильный email или пароль! '
    }
  })

  .catch(error =>{
    console.error("Ошибка!", error);
    document.getElementById('error-message').innerText = 'Произошла ошибка!'
  })
}