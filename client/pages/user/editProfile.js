import {useState, useContext, useEffect} from "react";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal, Avatar} from "antd";
import {LoadingOutlined, CameraOutlined} from "@ant-design/icons"

import AuthForm from '../../components/forms/AuthForm.js'
import { UserContext } from "../../context/index.js";

const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about,setAbout] = useState("");
  const [fname, setFname] = useState(''); 
  const [lname, setLname] = useState(''); 
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [secret, setSecret] = useState('');  //This variable holds the answer to the password recovery question
  const [ok, setOk] = useState(false); //Variable is used to hold the value of whether a use was succesfully registered or not 
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  //profile image
  const [image,setImage] = useState({});
  const [uploading,setUploading] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    if (state != null){
      console.log("user from state called in update: ", state);
    }
    setUsername(state.user.username);
    setAbout(state.user.about);
    setFname(state.user.first_name);
    setLname(state.user.last_name);
    setEmail(state.user.email);
    setImage(state.user.image);

  }, [state  && state.user])

  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
   
    const response = await axios.put(`/profile-update`, {
    username,
    about,
    fname,
    lname,
    email,
    pswd,
    secret,
    image
    });
    console.log("register page api call data:",response);
    if (response.status == 200){
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = response.data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //updating context
      setState({...state, user: response.data});
      setOk(true);
      setLoading(false);
    }
    else{
      toast.error(response.data.message);
      setLoading(false);
    }
  }

   const handleImage = async (e) =>{
    const file = e.target.files[0]; //could my multiple files so index to grab the first image
    let formData = new FormData();
    formData.append('image', file); //Adding image data
    // console.log([...formData]);
    setUploading(true);
    const response = await axios.post('/upload-image', formData);
    setImage({
      url: response.data.url,
      public_id: response.data.public_id
    });
    setUploading(false);
    //console.log("uploaded image data:", response);
  }

  return (
    <div className = 'container-fluid' style={{backgroundColor:"black"}}>
      <div className ="row py-5 ">
        <div className = 'col text-center'>
          <h1 className = "text-light">Profile</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>

          <label className = "d-flex justify-content-center h5">
            {image && image.url ? (
              <Avatar size = {30} src = {image.url} className = "mt-1" style = {{cursor: "pointer"}}/>
            ):
              uploading ? (
              <LoadingOutlined className = "mt-2"/>
              ):
              (<CameraOutlined className = "mt-2" style = {{cursor: "pointer"}}/>)
            }
            <input onChange = {handleImage} type = "file" accept = "images/*" hidden style = {{cursor: "pointer"}}/>
          </label>
          <AuthForm 
          profileUpdate = {true}
          username = {username}
          setUsername = {setUsername}
          about = {about}
          setAbout = {setAbout}
          handleSubmit = {handleSubmit} 
          fname = {fname}
          setFname = {setFname}
          lname = {lname}
          setLname = {setLname}
          email={email}
          setEmail = {setEmail}
          pswd = {pswd}
          setPswd = {setPswd}
          secret = {secret}
          setSecret = {setSecret}
          loading = {loading}
          />
        </div>
      </div>

      <div className ="row">
        <div className = "col">
          <Modal title = "Congratulations" visible = {ok} onCancel = {()=>{setOk(false)}} footer = {null}>
            <p>
              Succesfully updated profile!
            </p>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate;