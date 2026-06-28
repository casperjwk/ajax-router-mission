import { Link } from 'react-router'


export default function Posts({ posts =[] }) {
  return (
    <section>
      <h2>글목록</h2>
      {Posts.length === 0 ? (
        <p>글이 없습니다.</p>
      ): (
        <ul>
          {posts.map((post)=>(
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}