import { Link } from 'react-router'

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="card-top">
        <span className="post-number">POST #{post.id}</span>
        <span className="post-reactions">♥ {post.reactions?.likes ?? 0}</span>
      </div>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
      <div className="tags">
        {post.tags?.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}
      </div>
      <Link className="read-more" to={`/posts/${post.id}`}>자세히 보기 →</Link>
    </article>
  )
}
