import { useState } from "react";
import { useNavigate } from "react-router";

export default function PostNew({posts, setPosts}){
  const [title, setTitle] = useState('');
  const [content, setContent] =useState('');
  
  const navigate = useNavigate();

  const handleSubmit= (e)=>{
    e.preventDefault();

    const newId = posts.length>0
      ? Math.max(...posts.map(p => p.id))+1
      : 1;
      
    const newPost ={
      id: newId,
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
    };

    setPosts([...posts, newPost]);

    navigate(`/posts/${newId}`);
  };

  return(
    <div>
      <h2>새 게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input 
            id="title"
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
            />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea 
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            rows="10"
            required
          />
        </div>

        <button type="submit">등록하기</button>
      </form>
    </div>
  )
}