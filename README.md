## 프로젝트 실행 방법

1. Clone Repository
```shell
$ git clone https://github.com/Rejoiceee/hr.git
```

2. Install Dependency
```shell
$ npm install
```

3. Start App
```shell
$ npm start
```

> Node.js가 설치되어 있어야 합니다.

<br />

## 프로젝트 구조

```bash
/
│   README.md
│   .gitignore
│   package.json
└───package-lock.json
│
└───src
│   │     index.js
│   │     App.js
│   │
│   └───components
│   │    └───button
│   │    │   └───AddButton.js
│   │    └───Cards.js
│   │
│   └───helper
│   │    └───api.js
│   │
│   └───views
│   │    └───List.js
│   │
│   └───static
│   │    └───css
│   │    │    │    App.css
│   │    │    │    Cards.css
│   │    │    └──index.css
│   │    └───images
│   │    │    └──loading.gif
│   
└───public
    └───index.html
```

- src : 프로젝트 root 디렉토리
    - index.js : root js 파일
    - App.js : `fetch`를 통해 데이터를 가져오고, 인입되는 url에 따라 component를 불러온다
    - components : 컴포넌트를 모아 놓은 디렉토리
        - card : card 관련 컴포넌트
            - CardList.js : `Cards`컴포넌트를 이용하여 목록을 생성한다
            - Cards.js : 목록에 들어가는 Card형태의 컴포넌트
    - static : 정적 파일 디렉토리
    - helper : 공통 기능을 모아놓은 디렉토리
        - api.js : `fetch`를 공통으로 사용하기 위한 js 파일
    - views : 페이지 관련 디렉토리
        - index.js : 페이지를 공통으로 핸들링하기 위한 js 파일
        - List.js : 리스트 페이지 컴포넌트

<br />

### 목록 삭제 & 페이지 전환

항목을 옆으로 플리킹후 `DELETE` 버튼 클릭시 목록에서 삭제된다.
`id`와 `author`를 클릭할 경우 사진이 확대되어 새창으로 열린다.