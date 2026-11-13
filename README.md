# Mini Board

GDGoC 프론트엔드 파트 세션 React 실습용 게시판입니다.

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

## 구현 기능

- [x] React 프로젝트 기본 설정 및 페이지 라우팅
- [x] 게시글 목록 조회 (최대 10개)
- [x] 게시글 클릭 후 상세 페이지 이동 및 본문 조회
- [x] 게시글별 댓글 목록 조회
- [x] 로딩 / 오류 / 빈 결과 메시지

## 구조

- `src/api/posts.js`: 게시글 및 댓글 API 함수
- `src/pages/PostsPage.jsx`: 게시글 목록
- `src/pages/PostDetailPage.jsx`: 게시글 상세 및 댓글
- `src/components/`: 공통 UI 컴포넌트
- `src/index.css`: 스타일

기본 API는 `https://dummyjson.com`을 사용합니다. API 주소를 변경하려면 `.env.example`을 `.env.local`로 복사해 수정합니다.

## 확인

```bash
npm run lint
npm run build
```
