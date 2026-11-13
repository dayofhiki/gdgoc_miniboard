import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { fetchPost, fetchComments } from '../api/posts.js'

export default function PostDetailPage() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [commentsError, setCommentsError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    Promise.allSettled([
      fetchPost(postId, controller.signal),
      fetchComments(postId, controller.signal),
    ]).then(([postResult, commentsResult]) => {
      if (controller.signal.aborted) return

      if (postResult.status === 'fulfilled') {
        setPost(postResult.value)
      } else {
        setError('게시글을 불러오지 못했습니다.')
      }

      if (commentsResult.status === 'fulfilled') {
        setComments(commentsResult.value)
      } else {
        setCommentsError('댓글을 불러오지 못했습니다.')
      }
      setLoading(false)
    })

    return () => controller.abort()
  }, [postId])

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← 목록으로 돌아가기</Link>
      {loading && <p className="notice">게시글을 불러오는 중입니다...</p>}
      {error && <p className="notice error" role="alert">{error}</p>}
      {!loading && !error && post && (
        <article className="detail-card">
          <span className="post-number">게시글 #{post.id}</span>
          <h1>{post.title}</h1>
          <p className="detail-body">{post.body}</p>
          <div className="tags">
            {post.tags?.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}
          </div>
          <section className="comments-placeholder">
            <h2>댓글 ({comments.length})</h2>
            {commentsError && <p className="error" role="alert">{commentsError}</p>}
            {!commentsError && comments.length === 0 && <p>댓글이 없습니다.</p>}
            {!commentsError && comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <strong>{comment.user?.username ?? '익명'}</strong>
                <p>{comment.body}</p>
              </div>
            ))}
          </section>
        </article>
      )}
    </div>
  )
}
