/* 홈페이지 화면을 바꾸는 방법 */
const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    /* Main Page가 불릴때 product SELECT 하기 */
    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);  // 결과값 = rows
    });

    response.writeHead(200, {'Content-Type': 'text/html'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
    response.write(main_view); //화면에 뿌려질 데이터는 hello node.js 이다.
    response.end(); // response 끝남
}

let handle = {}; // {} key:value 쌍으로 이루어진 변수 상자 | key의 뜻은 value임을 알려주는 사전.
handle['/'] = main; // /의 뜻은 main이야.

function redRacket(response) {
    fs.readFile('./img/redRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
        response.write(data); //화면에 뿌려질 데이터는 hello node.js 이다.
        response.end(); // response 끝남
    })
}

function blueRacket(response) {
    fs.readFile('./img/blueRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
        response.write(data); //화면에 뿌려질 데이터는 hello node.js 이다.
        response.end(); // response 끝남
    })
}

function blackRacket(response) {
    fs.readFile('./img/blackRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
        response.write(data); //화면에 뿌려질 데이터는 hello node.js 이다.
        response.end(); // response 끝남
    })
}

function TennisMarketCss(response) {
    fs.readFile('./TennisMarket.css', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/css'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
        response.write(data); //화면에 뿌려질 데이터는 hello node.js 이다.
        response.end(); // response 끝남
    });
}

/* image directory */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

/* TennisMarket css 파일이 url로 넘어가지 않아서 생기는 문제 해결 시도 */
handle['./TennisMarket.css'] = TennisMarketCss;

exports.handle = handle;