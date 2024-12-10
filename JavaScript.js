// دالة لفحص قوة كلمة المرور
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('password-strength');
    
    let strength = 0;
  
    // فحص وجود أحرف كبيرة وصغيرة وأرقام ورموز
    if (password.length >= 6) {
      strength++;
    }
    if (password.match(/[A-Z]/)) {
      strength++;
    }
    if (password.match(/[0-9]/)) {
      strength++;
    }
    if (password.match(/[^A-Za-z0-9]/)) {
      strength++;
    }
  
    // إظهار المؤشر المناسب
    document.getElementById('weak').style.backgroundColor = strength >= 1 ? 'red' : 'transparent';
    document.getElementById('medium').style.backgroundColor = strength >= 2 ? 'yellow' : 'transparent';
    document.getElementById('strong').style.backgroundColor = strength >= 3 ? 'green' : 'transparent';
  }
  
  // دالة لفحص تطابق كلمات المرور
  function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const submitButton = document.querySelector('.submit-btn button');
  
    if (password === confirmPassword) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
  
  // دالة لتسجيل الدخول باستخدام جوجل (استبدلها بالكود الفعلي بعد دمج API جوجل)
  document.getElementById('google-login').addEventListener('click', function() {
    alert('Login with Google clicked');
    // هنا يمكنك دمج API جوجل
  });
  
  // دالة لتسجيل الدخول باستخدام فيسبوك (استبدلها بالكود الفعلي بعد دمج API فيسبوك)
  document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Login with Facebook clicked');
    // هنا يمكنك دمج API فيسبوك
  });
  // دالة لفحص تطابق كلمات المرور
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const submitButton = document.querySelector('#submit-button');
  
    if (password === confirmPassword) {
      submitButton.disabled = false;  // تفعيل الزر عندما تتطابق كلمات المرور
    } else {
      submitButton.disabled = true;   // تعطيل الزر عندما لا تتطابق كلمات المرور
    }
  }
  document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  });
  
  document.getElementById('toggle-confirm-password').addEventListener('click', function() {
    const confirmPasswordField = document.getElementById('confirm-password');
    const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    confirmPasswordField.type = type;
  });
  
  
