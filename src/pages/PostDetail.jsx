import { useParams, Link , useNavigate } from 'react-router'

export default function PostDetail(posts, onDelete) {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDeleteClick = () =>{
    if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")){
      onDelete(post.id);

      navigate('/posts');
    }
  }
  return(
    <div>
      <h2>{post.title}</h2>
      <caption>{post.createdAt}</caption>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>수정</Link>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  )
  
}