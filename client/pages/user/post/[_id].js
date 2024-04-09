import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from 'react';
import PostForm from "../../../components/forms/PostForm";
import UserRoute from "../../../components/routes/UserRoute";
import {toast} from "react-toastify";
import {Modal} from "antd";
function EditPost() {
  const [post,setPost] = useState({});
  //state
  const [content, setContent] = useState(""); //Content of the post
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false); //Boolean for if image is uploading or not
 
  const router = useRouter();
  
  const _id = router.query._id; //Has value of "_id" because the file name is _id
  useEffect(()=>{
    if (_id){
      fetchPost();
    }
  }, [_id])
  //console.log("router: ", router);
  const fetchPost = async () =>{
    const response = await axios.get(`/user-post/${_id}`);
    console.log(response);
    if (response.status == 200){
      setPost(response.data);
      setContent(response.data.content);
      setImage(response.data.image);
    }
  } 
    
  const postSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.put(`/update-post/${_id}`, {content,image});
    console.log("response from update-post: ", response);
    if (response.status == 400){
      toast.error(response.data.message);
    }
    else if (response.status == 200){
      toast.success("Post Updated!");
      router.push("/user/profile");
    }
  }

  const handleImage = async (e) =>{
    const file = e.target.files[0]; //could my multiple files so index to grab the first image
    let formData = new FormData();
    formData.append('image', file); //Adding image data
    formData.append("content", content); //Adding caption data 
    // console.log([...formData]);
    setLoading(true);
    const response = await axios.post('/upload-image', formData);
    setImage({
      url: response.data.url,
      public_id: response.data.public_id
    });
    setLoading(false);
    //console.log("uploaded image data:", response);
  }

  return (
    <div className = "min-vh-100" style={{backgroundColor: "black", overflowX: "hidden"}}>
      <UserRoute>
        <div className = "container-fluid" >
          <div className = "row py-5 ">
            <div className = "col text-center">
              <h1 className = "display-1 text-light text-center">Edit Post</h1>
            </div>
          </div>
        </div>

        <div className = "row py-3">
          <div className = "col-md-8 offset-md-2">
            <PostForm 
            content = {content} 
            
            setContent = {setContent} 
            postSubmit = {postSubmit} 
            handleImage = {handleImage}
            loading = {loading}
            image={image}/>
          </div>
        </div>  
      </UserRoute>
    </div>
  )
}

export default EditPost;
