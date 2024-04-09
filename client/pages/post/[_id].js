import {useState,useEffect, useContext} from 'react';
import {UserContext} from "../../context/index.js";
import axios from "axios";
import {useRouter} from "next/router";
import { toast } from "react-toastify";
import Post from '../../components/cards/Post';
import Link from 'next/link';
import {RollbackOutlined} from '@ant-design/icons'
import {Modal} from "antd";
import CommentForm from "../../components/forms/CommentForm"
function PostComments() {
  const [post,setPost] = useState({});
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const _id = router.query._id;
  //keeps track of if we should show the comments text box or not
  const [showComment, setShowComment] = useState(false)

  //indicates which post to pop comment textbox under
  const [currentPost, setCurrentPost] = useState({});  

  const [comment,setComment] = useState("");
  
  useEffect(()=>{
    if (_id) fetchPost();
  }, [_id]);

  // useEffect(()=>{
  //   if(post) fetchPost();
  // },[post])

  const fetchPost = async() => {
    try{
      const {data} = await axios.get(`/user-post/${_id}`);
      setPost(data);
      //console.log(post);
    } catch (err) {
      console.log(err);
    }
  }

  const handleComment = (post) => {
      setCurrentPost(post);
      setShowComment(true);
  }

  const addComment = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.put("/add-comment", {
        postId: currentPost._id, 
        comment,
      })
      //console.log("add comment", response);
      setComment("");
      setShowComment(false);
      fetchPost();
    } catch (err) {
      console.log(err);
    }
  }

  const removeComment = async(postId, comment) => {
    // console.log(postId, comment);
    let answer = window.confirm("Are you sure you want to delete this comment?")
    try {
      const response = await axios.put("/remove-comment", {postId, comment})
      //console.log("Comment removed data: ", response);
      fetchPost(); //refreshing post to show comment is removed
    } 
    catch(err){
      console.log(err);
    }
  }

   const handleLike =  (_id) => {
    // console.log("liked post: ", _id);
    try{
      const response = axios.put('/liked-post', {_id});
      console.log("handle like")
      fetchPost();
      console.log(post.likes)
    } catch (err) {
      console.log(err);
    }
  }

  const handleUnlike =  (_id) => {
    //console.log("unliked post: ",_id);
    try{
      const response = axios.put('/unliked-post', {_id});
      console.log('handle unlike');
      fetchPost();
      console.log(post.likes)
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (post) =>{
    try{
      const answer = window.confirm("Are you sure you want to delete this post?");
      if (!answer) return;
      const response = await axios.delete(`/delete-post/${post._id}`);
      if (response.status == 200){
        toast.error('Post Deleted!');
        router.push("/");
      }
      
    } 
    catch(err){
      console.log(err);
    }
  }


  return (
    <div style={{backgroundColor:"black", paddingTop:"1rem"}}>
      <div className = "row col-md-8 offset-md-2">
        <Post 
        handleLike={handleLike}
        handleUnlike={handleUnlike} 
        handleComment={handleComment} 
        singlePost= {true} 
        post={post} 
        commentsCount={100} 
        removeComment = {removeComment}
        handleDelete = {handleDelete}
        />
      </div>

      <Modal 
        visible = {showComment} 
        onCancel={()=>setShowComment(false)} 
        title = "Comment"
        footer={null}
      >
        <CommentForm addComment={addComment} comment={comment} setComment={setComment}/> 
      </Modal>

      <Link href = "/user/profile">
        <a className = "d-flex justify-content-center p-5">
          <RollbackOutlined/>
        </a>
      </Link>
    </div>
  )
}

export default PostComments