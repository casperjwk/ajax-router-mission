import { useParams, Link } from 'react-router'

export default function PostDetail(posts, onDelete) {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <h2>존재하지 않는 게시글입니다.</h2>
        <Link to="/posts">
          게시글 목록으로 돌아가기
        </Link>
      </div>
    )
  }
  return(
    <div>
      <h2>{post.title}</h2>
      <caption>{post.createdAt}</caption>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>수정</Link>
      <button onClick={() => onDelete(post.id)}>삭제</button>
    </div>
  )
  
}