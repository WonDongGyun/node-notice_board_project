# node-notice_board_project  
[**[트리스티의 Node.js 바닐라 자바스크립트 게시판 프로젝트에 오신 여러분을 환영합니다!]**](https://tristy.tistory.com/)  
로그인 없는 게시판 만들기 프로젝트  
꼭 필요한 부트스트랩 CSS만 적용하였습니다.  

No login board Project  
use Express, ejs, mongoose, bootstrap v5, vanilla js  

<br/>
<br/>


🤔 프로젝트 개요
-------------  
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>진행 날짜 - 2021.03.19 ~ 2021.03.25</b></li>
<li><b>목적 - 팀을 이루어 Node.js를 공부하고, 각자 주어진 과제를 해결하기</b></li>
<li><b>필수 포함 사항</b></li>
</ul>

<br/>
<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/114049098-1cdb1b00-98c6-11eb-8d30-8ca62b2f7c80.png"></p>

<br/>
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



**9. AWS에 올려보기**
--------------

<br/>

**1. AWS EC2 ubuntu에서 Free Tier 상품을 구매한 후, pem키를 보관해 둔다.**  

**2. git bash를 설치한 후,**  

<br/>


``` bash  
ssh -i 받은키페어를끌어다놓기 ubuntu@AWS에적힌 퍼블릭 IPv4
yes
```

<br/>

**3. EC2에 Node.js 설치**  

<br/>


``` bash  
1. Node.js 설치 명령어 1  
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -  

2. Node.js 설치 명령어 2   
sudo apt-get install -y nodejs

node -v 와 npm -v 입력시 버전값이 나오면 성공~!   
```

<br/>


**4. EC2에 몽고DB 설치. (한번에 입력하셔도 됩니다.)**  


<br/>

``` bash  
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org
```

<br/>

밑의 코드가 실행되었을 때, 아무 일도 발생하지 않는다면 정상적으로 설치가 된 것입니다.  

<br/>

``` bash  
sudo service mongod start
```


<br/>

몽고 DB로 접속해주시고, 계정을 바꿔주세요.  
바꾸셨다면 몽고DB에서 나와서 몽고DB를 재시작해줍시다.  

<br/>


``` bash  
mongo

use admin;

db.createUser({user: "원하는 ID", pwd: "원하는 PW", roles:["root"]});

exit;

sudo service mongod restart
```


<br/>


**5. 몽고DB 개방**  

<br/>

몽고DB를 외부에 개방해봅시다. vi에디터로 접속해 그림과 같이 내용을 바꿔줍시다.  

<br/>


``` bash  
sudo vi /etc/mongod.conf
```


<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/112260200-daea8c00-8cac-11eb-92c1-9aebec2a8bdc.png"></p>

<br/>

수정하셨다면 ESC키를 입력후, :wq를 입력해서 에디터를 종료하고 재시작해줍시다.  

``` bash  
sudo service mongod restart
```

<br/>

재시작이 끝났다면, Robo 3T에서 접속정보를 세팅합니다.  
Name값은 아무거나 입력해도 상관없으며, 주소값은 AWS IPv4 값을 입력하시면 됩니다.  
Authentication 탭에서 Perform authentication 체크박스를 클릭하고,  
Database는 admin, user name과 pw는 위에서 설정한대로 입력해줍시다.  

<br/>

**6. AWS 포트 개방**  

<br/>

Filezilla에서  
- SFTP 프로토콜 선택  
- 호스트 AWS 퍼블릭 IPV4로 설정  
- 로그온 유형 키파일로 설정 (키파일을 pem키 파일)  
- 사용자 ubuntu로 설정  

순서대로 작업을 해줍니다.  
위의 작업이 끝나면 FileZila로 프로젝트 파일을 AWS 환경으로 옮깁니다.  

<br/>

그 후, ls -la로 폴더 확인을 하셔서 프로젝트 폴더로 이동해주세요.  
프로젝트 모듈들은 node_modules에 있지만, 혹시 누락됐을 지도 모르기 때문에 한 번더 설치해보겠습니다.  

<br/>

``` bash  
npm install
```

<br/>

마지막으로 관리자 권한으로 이동해서, pm2를 실행시키고 프로젝트.js를 실행시키면 끝!  

<br/>

``` bash  
sudo -s

npm install -g pm2

pm2 start app.js
```




<br/>

마지막으로 AWS에 해당 서비스를 올리고 싶으시다면, dbconnect.js의 connect 부분을 다음과 같이 바꿔주시면 됩니다.  

<br/>

```javascript
const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      ignoreUndefined: true,
      user: "AWS 가상환경에서 설정한 user id",
      pass: "AWS 가상환경에서 설정한 user pw"
    })
    .catch(err => console.log(err));
};
mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});
module.exports = connect;
```  

<br/>




<br/>
<br/>

**7. 시간 조절**  

<br/>

AWS에서 구매한 서버의 시간이 우리 시간보다 +9시간 빠른 경우가 존재합니다.  
그래서 이 프로젝트의 코드는 몽고DB에 day값을 넣어줄 때 추가로 연산을 해서 넣어주는데,  
AWS에서는 추가 작업 없이 그냥 new Date()를 선언한 값을 시간으로 사용하시면 됩니다.  

[참고](https://github.com/beadoer1/TIL/blob/main/OS/linux/ubuntu_timezone.md)

<br/>
