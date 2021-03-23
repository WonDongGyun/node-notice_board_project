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


**1. include**
--------------

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

package.json의 "main" 부분을 index.js에서 main.js로 바꾸면, 시작점이 바뀌게 됩니다.  









