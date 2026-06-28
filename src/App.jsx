import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {

  const [posts, setPosts] =useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() =>{
    fetch('./data/blog.json')
    .then(res => res.json())
    .then(result =>{
      console.log(result);
      setPosts(result);
      setLoaded(true);
    })
    .catch((e)=> console.error("데이터로드 실패:",e));
  },[]);

  const handleDelete = (id) =>{
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />        
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/posts/new" element={<PostNew posts={posts} setPosts={setPosts}/>}/>
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDelete}/>}
        />
        <Route
        path="/posts/:id/edit"
        element={<PostEdit posts={posts} setPosts={setPosts}/>}></Route>
        <Route path="*" element={<NotFound />}/>
      </Route>      
    </Routes>
    </div>
  )
}

export default App
