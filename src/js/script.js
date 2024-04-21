const emailData = document.getElementById('email')
const passwordData = document.getElementById('password')
const button = document.getElementById('button-login')

button.addEventListener('click', () => {
  if (emailData.value == 'admin@admin.com' && passwordData.value == 1234){
    alert('Login successful')
  } else {
    alert('Login failed')
  }
})