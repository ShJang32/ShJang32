let http = require('http'); /* node.js가 가지고 있는 모듈(조립이 되어 있는 부품 http )을 가져와주면 완제품을 만들거임. */
let url = require('url'); // url 모듈을 url변수에 담았다.


function start(route,handle) {
    function onRequest(request, response) { // request와 response를 적으면 node.js가 요청을 받아 응답을 처리해줌
        if (!request.url.includes("favicon.ico")) {
            let pathname = url.parse(request.url).pathname; // url의 path이름을 pathname에 물어와.
            let queryData = url.parse(request.url, true).query;
            route(pathname, handle, response, queryData.productId); // router에게 pathname을 전달해줌.
        }  
        
    }
    
    http.createServer(onRequest).listen(8888); /* 서버를 만들고, 요청을 들을 client 적는다. */
    // onRequest를 사용해서 요청사항 처리한 결과를 보낼거야. 이걸 받으려면 8888로 클라이언트가 들어와야해.  
}

exports.start = start; // 바깥에서 앞 start를 사용할 수 있게 하겠다.. 앞 start는 이 파일에서 만든 뒷start이다.


// var u = url.parse(str_url)
// var u = new URL(str_url)