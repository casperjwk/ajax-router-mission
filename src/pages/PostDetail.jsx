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
}