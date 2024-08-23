/* 모듈 불러오기 */
const mariadb = require('mysql');

/* db와 사이트의 연결통로 만들기 */
const conn = mariadb.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: "Tennis"
    }
);

module.exports = conn;  // 연결통로 밖에서도 보이게 하기