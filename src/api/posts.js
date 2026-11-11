const BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://dummyjson.com').replace(/\/$/, '')

async function getJson(path, signal) {
  const response = await fetch(`${BASE_URL}${path}`, { signal })

  if (!response.ok) {
    throw new Error('데이터를 가져오지 못했습니다.')
  }

  return response.json()
}

export async function fetchPosts(signal) {
  const data = await getJson('/posts?limit=10', signal)
  return data.posts ?? []
}

export function fetchPost(postId, signal) {
  return getJson(`/posts/${encodeURIComponent(postId)}`, signal)
}

// TODO: 댓글 조회 API 추가하기 (/posts/:id/comments)
