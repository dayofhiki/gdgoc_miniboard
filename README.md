# Mini Board

GDGoC 프론트엔드 파트 세션 React 실습용 게시판.

## 실행

Node.js LTS 설치 후:

```bash
npm install
npm run dev
```

터미널에 표시된 Local 주소로 접속합니다.

## 사용 기술

- React + Vite (JavaScript)
- React Router
- CSS
- DummyJSON API

## 진행 상황

- [x] React 프로젝트 기본 설정 및 페이지 라우팅
- [x] 게시글 목록 조회 (최대 10개)
- [x] 게시글 클릭 후 상세 페이지 이동 및 본문 조회
- [x] 로딩 / 오류 메시지
- [ ] 게시글 댓글 조회

## 구조

- `src/api/posts.js`: 게시글 API 함수
- `src/pages/PostsPage.jsx`: 게시글 목록
- `src/pages/PostDetailPage.jsx`: 게시글 상세
- `src/components/`: 공통 UI 컴포넌트
- `src/index.css`: 스타일

기본 API는 `https://dummyjson.com`을 사용합니다. API 주소를 변경하려면 `.env.example`을 `.env.local`로 복사해 수정합니다.

## 다음에 할 일

상세 화면의 댓글 영역에 `GET /posts/:id/comments` 결과를 표시하고, 요청 중 로딩 상태와 댓글이 없는 경우를 처리하기.
