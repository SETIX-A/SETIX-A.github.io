document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    myButton.addEventListener('click', function() {
        welcomeMessage.textContent = '感谢您的点击！JavaScript 正在工作！';
        myButton.textContent = '已点击';
        myButton.disabled = true; // 点击后禁用按钮
    });
});```
