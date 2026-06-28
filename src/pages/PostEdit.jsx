import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function PostEdit({ posts, setPosts }){
  const { id } = useParams();

  const targetPost = posts.find((p) => p.id === Number(id));

  if (!targetPost){
    return <div>존재하지 않는 게시글입니다.</div>
  }

  return <PostEditForm targetPost={targetPost} id={id} posts={posts} setPosts={setPosts}/>
}

function PostEditForm({targetPost, id, posts, setPosts}){

  const navigate = useNavigate();

  const [title, setTitle] = useState(targetPost.title);
  const [ content, setContent] = useState(targetPost.content);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const updatedPosts = posts.map((post) => 
    post.id === Number(id)
    ? {...post, title:title, content:content}
    : post
  );

  setPosts(updatedPosts);
  navigate(`/posts/${id}`);
  }


  return(
    <div>
      <h2>게시글 수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title" 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
        </div>

        <div>
          <label htmlFor="content">내용</label>
          <textarea 
           id="content"
           value={content}
           onChange={(e) => setContent(e.target.value)}
           rows="10"
           required
           />
        </div>

        <button type="submit">수정완료</button>
        <button type="button" onClick={() => navigate(-1)}>취소</button>
      </form>
    </div>
  )
}