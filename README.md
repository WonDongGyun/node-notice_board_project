# node-notice_board_project  
[**[트리스티의 Node.js 바닐라 자바스크립트 게시판 프로젝트에 오신 여러분을 환영합니다!]**](https://tristy.tistory.com/)  
로그인 없는 게시판 만들기 프로젝트  
꼭 필요한 부트스트랩 CSS만 적용하였습니다.  

<br/>

사용한 패키지 및 CSS  
-----------------
- **Express**  　　　=> node.js의 웹 프레임워크  
- **ejs**　　　　　=> node.js의 템플릿 엔진  
- **mongoose**　　=> node.js에서 몽고DB를 사용해봅시다.  
- **BootStrap v5**　=> jquery는 이제 안녕~!　 jquery가 사라진 BootStrap을 사용하였습니다.  


<br/>
<br/>

폴더 구조  
-----------------  

<br/>

```bash
node-notice_board_project
├─ node_modules
│  │  
├─ schema
│  ├─ boardSchema.js
│  ├─ dbconnect.js
│  │  
├─ views
│  ├─ basicBoard
│  │  └─ basicBoard.js
│  │  └─ basicBoard.ejs
│  │  └─ readBoard.ejs
│  │  └─ updateBoard.ejs
│  │  └─ writeBoard.ejs
│  │  
│  ├─ include
│  │  └─ header.ejs
│  │  └─ footer.ejs
│  │  └─ modal.ejs
│  │ 
└─ main.js
└─ package-lock.json
└─ package.json
```

<br/>
<br/>


작동 방식 그림 
-----------------  

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/112131093-8263b200-8c0c-11eb-8e46-63a5d40a6d3e.png"></p>


<br/>
<br/>

주의사항 및 Tip
==============

**1. include**
--------------

<br/>

include를 사용하면 ejs내의 공통 부분을 묶어서 다른 파일로 관리할 수 있습니다.  
이 프로젝트에서는 header와 footer 그리고 modal창을 묶어서 다른 디렉토리의 파일로 관리하였습니다.  

<br/>

사용방법은 다음과 같습니다.  

```ejs
<%- include ('파일경로') -%>
```

<br/>

ejs의 버전이 바뀌면서 예전의 문법을 사용하면 오류가 납니다. include를 할 때에는 반드시 최신 문법으로 작성해주세요. 

```bash
If the above error is not helpful, you may want to try EJS-Lint
```
<br/>
 

<br/>

구버전 문법  
```ejs
<% include ./include/header %>
```  

<br/>

최신 문법  
```ejs
<%- include ('./include/header') -%>
```  

<br/>
<br/>

**2. package.json**
--------------

<br/>

package.json의 "main" 부분을 index.js에서 main.js로 바꾸면, 시작점이 바뀌게 됩니다.  

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/112120361-7b837200-8c01-11eb-8e8f-72d5ee4da649.png"></p>

<br/>
<br/>

**3. connect 경로**
--------------

<br/>

몽고DB 스키마 설정 경로가 index.js 라면 자동으로 찾습니다.  

<br/>

```javascript
const connect = require('./schema');
connect();
```  
<br/>

만약, index.js가 아니라 다른 이름의 js 파일이라면 경로를 더 자세히 작성해야 합니다.  

<br/>

```javascript
const connect = require('./schema/dbconnect');
connect();
```  

<br/>
<br/>

**4. render 경로**
--------------

<br/>

node.js는 view를 set() 했을 때의 기준으로 render 경로를 찾습니다.  
set()으로 render 기준 경로를 views 폴더를 선택했기 때문에, res.render()를 사용할 때의 경로는 views 폴더를 기준으로 작성해야 합니다.  

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/112121035-1e3bf080-8c02-11eb-9a84-fea3be7efd56.png"></p>

<br/>
<br/>

**5. req.param(), req.body()**
--------------

<br/>

- **req.param()**  => /readBoard/:boardId (/readBoard/?boardId=4) 이런 형태의 값을 받을 수 있습니다.  
- **req.body()**  => POST 등의 HTML method를 사용해 body에 데이터를 담아 보낼 경우, 값을 받을 수 있습니다.  

<br/>
<br/>

**6. JSON.parse()**
--------------

<br/>

만약 JSON.parse()를 사용하지 않고, responseText를 받을 경우 값을 받오기 굉장이 애매해집니다.  

<br/>

```bash
{ "result" : "fail" }
```  

<br/>

JSON.parse()를 사용하면 값을 딕셔너리 형태로 받아올 수 있습니다.  

<br/>

```bash
{ result : "fail" }
``` 

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/112122265-71627300-8c03-11eb-9d4a-9d1c0b8bae98.png"></p>

<br/>
<br/>


**7. MongoDB unique 키값 수정**
--------------

<br/>

실수로 스키마의 어떤 컬럼에 unique 값을 적어놨는데, 나중에 수정하고 싶다면 우선 스키마 정보가 담긴 js 파일에서 해당 unique: true를 지워줍니다.  
그 다음, Robo 3T에서 다음의 명령어를 입력하고 ctrl + enter키를 눌러줍니다.  

```robo 3T
db.스키마이름.dropIndexes()
``` 

<br/>
<br/>


**8. vanilla JS ajax 사용하기**
--------------

<br/>

jquery를 사용하면 아주 손쉽게 html 요소들의 값을 가져올 수 있고, ajax 구문도 간단하게 작성할 수 있습니다.  
하지만, jquery는 그만큼 몸집이 크기 때문에 쓸대없는 공간을 차지하기도 합니다.  

<br/>

그래서 해당 프로젝트에서는 vanilla Js를 사용하여 서버와 통신하였습니다.  

<br/>

vanilla JS에서 GET 통신 예제입니다.  


```javascript
        document.addEventListener('DOMContentLoaded', function () {
            get_all_board();
        })
        
        function get_all_board() {
            var board_ajax = new XMLHttpRequest();
            board_ajax.onload = function () {
                if (board_ajax.status == 200 || board_ajax.status == 201) {
                    const boardArr = JSON.parse(board_ajax.responseText)['boards'];
                    }
                }
            }

            board_ajax.onerror = function () {
                console.error(board_ajax.responseText);
            }

            board_ajax.open('GET', '/api/board');
            board_ajax.send();
        }        
``` 

<br/>

document.addEventListener()를 사용하여 웹페이지가 시작할때 자동으로 함수를 불러올 수 있도록 하였습니다.

```javascript
        document.addEventListener('DOMContentLoaded', function () {
            get_all_board();
        })
```

<br/>

XMLHttpRequest()를 사용하여 서버와 상호작용할 수 있는 객체를 만들었습니다.  
onload를 사용하여 서버와 상호작용을 하면 작동할 수 있는 함수를 만들었습니다. 서버와 상호작용 전까지는 작동하지 않습니다.  

```javascript
var board_ajax = new XMLHttpRequest();
board_ajax.onload = function () {
```

<br/>

onerror를 사용하여 서버와 상호작용시 발생한 오류에 대해 대처할 수 있게 만들었습니다.  

```javascript
board_ajax.onerror = function () {
    console.error(board_ajax.responseText);
}
```

<br/>

open()에 통신방식, 경로값을 입력하면 해당 api로 접근할 수 있습니다.  
send()에 서버에 전달하고 싶은 데이터를 넣으면 body에 데이터를 담아 서버로 전송합니다.  

```javascript
board_ajax.open('GET', '/api/board');
board_ajax.send();
```

<br/>


<br/>
<br/>


<br/>

vanilla JS에서 POST 통신 예제입니다.  


```javascript
            function save_blog() {
                const write_ajax = new XMLHttpRequest();

                let title = document.getElementById('title').value;
                let name = document.getElementById('name').value;
                let contents = document.getElementById('contents').value;
                let passWord = document.getElementById('passWord').value;


                const data = {
                    title: title,
                    name: name,
                    contents: contents,
                    passWord: passWord
                };


                write_ajax.onload = function () {
                    if (write_ajax.status == 200 || write_ajax.status == 201) {
                        responseTxt = JSON.parse(write_ajax.responseText)
                    }
                }

                write_ajax.onerror = function () {
                    console.error(write_ajax.responseText);
                }

                if (title != '' && name != '' && contents != '' && passWord != '') {
                    write_ajax.open('POST', '/api/writeBoard');
                    write_ajax.setRequestHeader('Content-Type', 'application/json');
                    write_ajax.send(JSON.stringify(data));

                } else {
                    myChkValModal.show();
                }
            }

``` 

<br/>

전체적인 구문은 GET 방식과 같습니다. 하지만 데이터를 전달하는 부분에 차이가 있습니다.  

<br/>

우선 변수에 딕셔너리 형태로 값을 담습니다. 그 후, setRequestHeader와 send를 사용해 값을 정제하여 서버로 전송합니다.  

<br/>

setRequestHeader('Content-Type', 'application/json')를 사용하여 전달하는 데이터가 JSON 타입이라는 것을 알립니다.  
send(JSON.stringify(data))를 사용해 해당 데이터를 JSON 문자열로 반환합니다.  

<br/>

```javascript
write_ajax.setRequestHeader('Content-Type', 'application/json');
write_ajax.send(JSON.stringify(data));
```

<br/>
<br/>
