// منع الضغط المطوّل ومنع قائمة السياق
document.querySelectorAll('a, img').forEach(element => {
    element.addEventListener('contextmenu', e => e.preventDefault()); // منع قائمة السياق
    element.addEventListener('mousedown', e => {
        if (e.button === 2) { // إذا كان الزر الأيمن للماوس
            window.location.href = element.href || element.parentElement.href;
        }
    });
});

// إضافة كود تتبع الزوار
const TOKEN = "8067718085:AAFNWvrnhPoygEmg6x87wlrCPtcRi9JraCg"; // استبدل هذا بتوكن البوت الخاص بك من Telegram
const CHAT_ID = "6749749704"; // استبدل هذا بمعرف الدردشة (Chat ID) الخاص بك
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
const message = `دخل شخص جديد للموقع  عدد الكل : ${visitCount}`;
const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
fetch(url).catch(error => console.error("خطأ:", error));
