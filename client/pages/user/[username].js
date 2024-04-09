import {useEffect, useState, useContext} from "react";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import axios from "axios";
import Link from "next/link"
import {imageSource} from '../../functions/index.js'
import {Modal, Avatar, Pagination} from "antd";
import CommentForm from "../../components/forms/CommentForm"
import PostList from '../../components/cards/PostList'

function Username() {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const [user,setUser] = useState([]);
  const [posts, setPosts]=useState([]);
  const [page,setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [currentPost, setCurrentPost] = useState({});  
  const [comment,setComment] = useState("");
  useEffect(()=>{
    fetchUser();
    axios.get(`/user-total-posts/${user._id}`).
      then((response)=>{
        console.log(response);
        setTotalPosts(response.data);
        setPage(totalPosts/3)
      });
  },[router.query.username || page]);

  const fetchUser = async () => {
    try{
      const response = await axios.get(`/user/${router.query.username}`);
      // console.log("Following list", response);
      setUser(response.data);
      const post = await axios.get(`/profile-feed/${page}/${response.data._id}`);
      //console.log("post: ", post)
      setPosts(post.data);
      // console.log("posts: ", posts)
    } catch(err){
      console.log(err);
    }
  }

  const handleComment = (post) => {
    setCurrentPost(post);
    setShowComment(true);
  }

  const removeComment = async(postId, comment) => {
    // console.log(postId, comment);
    let answer = window.confirm("Are you sure you want to delete this comment?")
    
    try {
      const response = await axios.put("/remove-comment", {postId,comment})
      //console.log("Comment removed data: ", response);
      newsFeed(); //refreshing post to show comment is removed
    } 
    catch(err){
      console.log(err);
    }
  }

  const addComment = async (e) => {
    e.preventDefault();
    // console.log("Adding comment to this post: ", currentPost._id);
    // console.log("Comment: ", comment);
    try{
      const response = await axios.put("/add-comment", {
        postId: currentPost._id, 
        comment,
      })
      //console.log("add comment", response);
      setComment("");
      setShowComment(false);
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  }
  const handleLike = async (_id) => {
    // console.log("liked post: ", _id);
    try{
      const response = await axios.put('/liked-post', {_id});
      //console.log('liked: ', response);
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  }

  const handleUnlike = async (_id) => {
    //console.log("unliked post: ",_id);
    try{
      const response = await axios.put('/unliked-post', {_id});
      //console.log('unliked: ', response);
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div style = {{backgroundColor: "black", overflow:"hidden", height:"auto"}} className = "container-fluid min-vh-100">
      <div className = "row py-5">
        <div className = "col text-center">
          <Avatar size={90} src={imageSource(user)}/>
            <h1 className = "display-1 text-center text-light">{user.username}</h1>
              {user && user.following && (
                <>
                <h4 className = "text-light" style ={{display: "inline"}}>{user.followers.length} Followers </h4>
                <Link href = {`/user/following`}>
                  <a>
                    <h4 className = "text-light" style ={{display: "inline"}}>{user.following.length} Following</h4>     
                  </a>             
                </Link>
                </>
              )}
        </div>
      
      <div className = "row py-3 ">
        <div className = "col-md-8 offset-md-2" >
           <PostList 
            posts = {posts} 
            handleLike={handleLike} 
            handleUnlike={handleUnlike}
            handleComment={handleComment}
            removeComment = {removeComment}
            />
            <div className = "d-flex justify-content-center">
              <Pagination  
              current={page} 
              pageSize={3}
              total = {(totalPosts)} //shows 3 posts on each page
              onChange={(value)=>{setPage(value); fetchUser()}}
              className = "pb-5"
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
        </div>  
      </div>    
    </div>
      {/* <div className = "pt-5 pb-5">
        <Card hoverable cover = {<img src = {imageSource(user)} alt = {user.first_name}/>}>
          <Meta title={user.first_name} description ={user.about}/>
          <p className = "pt-2 text-muted">{moment(user.createdAt).fromNow}</p>
          <div className = "d-flex justify-content-between">
            <span className = "btn btn-sm">
              {user.followers && user.followers.length} Followers
            </span>
            <span className = "btn btn-sm">
              {user.followers && user.following.length} Following
            </span>
          </div>
        </Card>
        
        <Link href ="/user/profile">
          <a className = "d-flex justify-content-center pt-5">
            <RollbackOutlined/>
          </a>
        </Link>
      </div> */}
    </div>
  )
}

export default Username;
