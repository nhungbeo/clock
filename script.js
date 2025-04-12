// Các phần tử hiển thị thời gian
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const dateDisplay = document.querySelector('.date');

// Format số để hiển thị (thêm số 0 phía trước nếu < 10)
function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

// Cập nhật thời gian hiện tại
function updateCurrentTime() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Cập nhật hiển thị thời gian
    hoursDisplay.textContent = formatNumber(hours);
    minutesDisplay.textContent = formatNumber(minutes);
    secondsDisplay.textContent = formatNumber(seconds);
    
    // Cập nhật hiển thị ngày tháng
    const day = formatNumber(now.getDate());
    const month = formatNumber(now.getMonth() + 1); // Tháng bắt đầu từ 0
    const year = now.getFullYear();
    
    dateDisplay.textContent = `${day}/${month}/${year}`;
}

// Cập nhật thời gian mỗi giây
setInterval(updateCurrentTime, 1000);

// Cập nhật ngay khi trang web tải xong
updateCurrentTime();
