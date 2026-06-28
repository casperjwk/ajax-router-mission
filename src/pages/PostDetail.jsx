import { useParams, Link , Navi } from 'react-router'

export default function PostDetail(posts, onDelete){
    const post = posts.find((p) => p.id === Number(id));

    if(!post){
        return
    }
}