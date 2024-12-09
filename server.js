const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // تعيين المجلد الذي يحتوي على الملفات الثابتة (HTML, CSS, JS)

io.on('connection', (socket) => {
    console.log('مستخدم متصل');

    // استقبال الرسالة من العميل (المتصفح)
    socket.on('sendMessage', (message) => {
        console.log('رسالة جديدة:', message);
        io.emit('receiveMessage', message); // إرسال الرسالة إلى جميع المتصلين
    });

    // عند قطع الاتصال
    socket.on('disconnect', () => {
        console.log('مستخدم مفصول');
    });
});

server.listen(3000, () => {
    console.log('الخادم يعمل على المنفذ 3000');
});
