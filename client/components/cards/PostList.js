import {UserContext} from "../../context/index.js";
import {useContext,useEffect} from "react";
import {useRouter} from "next/router";
import Post from '../../components/cards/Post'
function PostList({posts, handleDelete, handleLike, handleUnlike, handleComment, removeComment,singlePost}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  useEffect(()=>{
    console.log(posts);
  },[])
  return(
    <> 
    {posts && posts.map((post) => (
       <Post 
       
       post={post} 
       handleDelete={handleDelete} 
       handleLike={handleLike} 
       handleUnlike={handleUnlike} 
       handleComment={handleComment}
       removeComment={removeComment}
       commentsCount={2}
       singlePost={false}
       />
      ))
    }   
    </>
  )
}

export default PostList;
