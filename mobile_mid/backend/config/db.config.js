// config/db.js
const mysql = require('mysql2/promise'); // ใช้ mysql2/promise

// สร้างการเชื่อมต่อแบบ Pool กับฐานข้อมูล MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'room_reservation_db',
});

// ฟังก์ชันสำหรับตรวจสอบการเชื่อมต่อ
async function testConnection() {
    try {
        console.log('Connected to the MySQL database.');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// เรียกใช้งานฟังก์ชันตรวจสอบการเชื่อมต่อ
testConnection();

