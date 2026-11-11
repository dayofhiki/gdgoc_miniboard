import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import PostsPage from './pages/PostsPage.jsx'
import PostDetailPage from './pages/PostDetailPage.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route path="*" element={<p className="notice">페이지를 찾을 수 없습니다.</p>} />
        </Routes>
      </main>
    </>
  )
}
