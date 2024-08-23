function route(pathname, handle, response) {
    console.log('pathname: ' + pathname); // 서버한테 pathname 받아서 콘솔에 발자국을 남기겠습니다.
    
    if (typeof(handle[pathname]) == 'function') {
        handle[pathname](response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'}); // head를 만들때, 정상이다라고 보내고, 내가 너한테 줄 내용은 html이다.
        response.write('Not Found'); //화면에 뿌려질 데이터는 hello node.js 이다.
        response.end(); // response 끝남
    }
}

exports.route = route;