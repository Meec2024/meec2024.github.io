function showDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDateTime   
= now.toLocaleString('vi-VN', options); // Định dạng theo tiếng Việt
    document.getElementById("datetime").textContent = formattedDateTime;
  }

  showDateTime(); // Gọi hàm ngay khi trang được load