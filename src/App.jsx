import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router'

function App() {

  const [posts, setPosts] =useState([]);
  useEffect(() )


  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />        
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/:id"
          element={<PostDetail posts={} onDelete={}/>}
        />
        <Route path="*" element={<NotFound />}/>
      </Route>      
    </Routes>
    </div>
  )
}

export default App
