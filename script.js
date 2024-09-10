const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');

loginForm.addEventListener('submit',   
 (event) => {
    event.preventDefault();
    // Lấy thông tin đăng nhập từ form
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;   


    // Kiểm tra thông tin đăng nhập trong Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);   


    if (user) {
        // Đăng nhập thành công
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang khác
        window.location.href = 'trang-chu.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Lấy thông tin đăng ký từ form
    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // Lưu thông tin người dùng vào Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));   


    alert('Đăng ký thành công!');
});