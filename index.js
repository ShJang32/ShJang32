let server = require('./server'); // 서버 모듈을 불러옴.
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();  // db와 연결됨

server.start(router.route, requestHandler.handle); // 서버가 실행되게 함.