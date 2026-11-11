import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { fetchPost } from '../api/posts.js'

export default function PostDetailPage() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchPost(postId, controller.signal)
      .then(setPost)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [postId])

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← 목록으로 돌아가기</Link>
      {loading && <p className="notice">게시글을 불러오는 중입니다...</p>}
      {error && <p className="notice error" role="alert">게시글을 확인할 수 없습니다. {error}</p>}
      {!loading && !error && post && (
        <article className="detail-card">
          <span className="eyebrow">POST #{post.id}</span>
          <h1>{post.title}</h1>
          <p className="detail-body">{post.body}</p>
          <div className="tags">
            {post.tags?.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}
          </div>
          <section className="comments-placeholder">
            <h2>Comments</h2>
            <p>댓글 목록은 다음 단계에서 구현할 예정입니다.</p>
          </section>
        </article>
      )}
    </div>
  )
}
