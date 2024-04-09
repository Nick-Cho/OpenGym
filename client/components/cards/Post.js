import renderHTML from 'react-render-html';
import {UserContext} from "../../context/index.js";
import {useContext} from "react";
import {useRouter} from "next/router";
import moment from 'moment';
import Link from "next/link"
import {Avatar} from 'antd';
import PostImage from '../images/PostImage'
import {HeartOutlined, HeartFilled, CommentOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons"
import {imageSource} from "../../functions"
function Post({
  post, 
  handleDelete, 
  handleLike, 
  handleUnlike, 
  handleComment,
  commentsCount, 
  removeComment,
  home, //tracks if posts component is being rendered in home page
  singlePost, //tracks if the post is in the single post view page
}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  
  return(
    <> 
    
      {post && post.postedBy && <div key = {post._id} className = "card mb-5 bg-dark">
        <div className = "card-header">
          <div>
            {/* <Avatar size = {40} classsName="mb-2">{post.postedBy.first_name[0]}</Avatar>{" "}*/}
            <Avatar size = {40} classsName="mb-2" src={imageSource(post.postedBy)}/>
            <span className="pt-2 ml-3 text-light" style = {{marginLeft: "0.5rem"}}>{post.postedBy.first_name}</span>
            <span className="pt-2 ml-3 text-light" style = {{marginLeft: "0.5rem"}}>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
         
        <div className = "card-body text-light">
          {renderHTML(post.content)}
        </div>

        <div className = "card-footer">
          <PostImage home={home} url = {post.image.url}/>
          <div className = "d-flex pt-2">
            
            {state && state.user && post.likes && (singlePost ? post.likes.some(person=> person._id == state.user._id) : post.likes.includes(state.user._id)) ? 
            (
              <>
                <HeartFilled
                onClick ={()=> !home ? handleUnlike(post._id):console.log() } 
                style={{cursor: !home ? "pointer" : ""}} 
                className = "text-danger pt-2 h5 px-2"
                />
              </>
            ) :
            (
              <>
                <HeartOutlined 
                onClick ={()=> !home ?handleLike(post._id):console.log()} 
                style={{cursor: !home? "pointer": ""}} 
                className = "text-danger pt-2 h5 px-2"
                />  
              </>         
            )}

            
            <div className = "pt-2 pl-4 text-light" style ={{marginRight: "2rem"}}>
              {post.likes.length} 
              {post.likes.length == 1 ? " like" : " likes"}
            </div>
            
            <CommentOutlined 
            onClick = {()=> !home ? handleComment(post): console.log(post)}
            style={{cursor: "pointer"}} 
            className = "text-danger pt-2 h5 px-2"/>
            

            <div className = "pt-2 pl-4" style ={{marginRight: "2rem"}}>
              {!home ? (
              <Link href = {`/post/${post._id}`}>
                <a className = "text-light"> 
                  {post.comments.length}
                  {post.comments.length == 1 ? " comment" : " comments"}
                </a>
              </Link>)
              : (
              <div className = "text-light">
                {post.comments.length}
                {post.comments.length == 1 ? " comment" : " comments"}
              </div>
              )
            }
            </div>

            {state && state.user && state.user._id === post.postedBy._id && !home && (
              <>
                <EditOutlined 
                style={{cursor: "pointer"}}
                onClick={()=> router.push(`/user/post/${post._id}`)}
                className = "text-danger pt-2 h5 px-2"/>
                <DeleteOutlined 
                onClick={()=>{handleDelete(post)}}
                className = "text-danger pt-2 h5 px-2" 
                style={{cursor: "pointer"}}
                />
              </>
            )}
          </div>
        
          <ul 
          className = "list-group"
          style = {{maxHeight: "150px", overflow: singlePost ? "scroll": "", overflowX: singlePost ?"hidden" : ""}}    
          >
            {post.comments.length > 0 && post.comments.slice(0,commentsCount).map((comment)=>(
              <li key = {comment._id} className = "list-group-item d-flex justify-content-between align-items-center" style={{background: "#202020"}}>
                
                <div className = "ms-2 me-auto">
                  <div className = "font-weight-bold text-light">
                    <Avatar size = {20} className ="mb-1 mr-3" 
                    src={imageSource(comment.postedBy)}
                    />
                    <div style = {{display: "inline", paddingLeft: "10px"}}>
                      {comment.postedBy.username}
                    </div>
                    
                  </div>
                  <div className = "text-light">{comment.text}</div>
                </div>
                
                <span className = "badge rounded-pill text-muted">
                  {moment(comment.created).fromNow()}
                  {state && state.user && state.user._id === comment.postedBy._id && !home && (
                    <div className = "mt-2 d-flex flex-row-reverse">
                      <DeleteOutlined 
                      onClick = {()=> removeComment(post._id, comment)}
                      className = "justify-content-right pl-1 text-danger"
                      style = {{cursor: "pointer"}}
                      />
                    </div>
                  )
                  }
                </span>       
              </li>
              )
            )}  
          </ul>
        
      </div>
    </div>}
      
    </>
  )
}

export default Post;
