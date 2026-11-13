import { useEffect, useState } from 'react'
import { fetchPosts } from '../api/posts.js'
import PostCard from '../components/PostCard.jsx'

export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchPosts(controller.signal)
      .then(setPosts)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      <section className="posts-section" aria-label="게시글 목록">
        <div className="section-heading">
          <h1>게시글 목록</h1>
          <span>{loading ? '불러오는 중' : `총 ${posts.length}개`}</span>
        </div>
        {loading && <p className="notice">게시글을 불러오는 중입니다...</p>}
        {error && <p className="notice error" role="alert">{error}</p>}
        {!loading && !error && posts.length === 0 && <p className="notice">게시글이 없습니다.</p>}
        {!loading && !error && (
          <div className="posts-grid">
            {posts.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        )}
      </section>
    </>
  )
}
