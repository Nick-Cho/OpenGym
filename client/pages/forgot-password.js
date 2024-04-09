import {useState, useContext} from "react";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal} from "antd";
import Link from 'next/link';

import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js'
import { UserContext } from "../context/index.js";
import { Router } from "next/router";
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPswd, setNewPswd] = useState(''); 
  const [secret, setSecret] = useState('');  //This variable holds the answer to the password recovery question
  const [ok, setOk] = useState(false); //Variable is used to hold the value of whether a use was succesfully registered or not 
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    
    setLoading(true);
    const response = await axios.post(`/forgot-password`, {
    email,
    newPswd,
    secret,
    })
    //console.log("forgot password data: ", response);
    if (response.status === 400){
      toast.error(response.data.message);
      setLoading(false);
    }
    else if (response.status === 200){
      setEmail("");
      setNewPswd("");
      setSecret("");
      setOk(true);
      setLoading(false);
    }
    

    // setEmail("");
    // setPswd("");
    // setSecret("");
    // setOk(data.ok);
    // setLoading(false);
  
  }

  if (state && state.token){
    router.push("/")
  }
  return (
    <div className = 'container-fluid min-vh-100' style={{backgroundColor: "black"}}>
      <div className ="row py-5 text-light" style={{backgroundColor: "black"}}>
        <div className = 'col text-center'>
          <h1 className = "text-light">Forgot Password</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <ForgotPasswordForm 
          handleSubmit = {handleSubmit} 
          
          email={email}
          setEmail = {setEmail}
          newPswd = {newPswd}
          setNewPswd = {setNewPswd}
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
              Succesfully Reset Password!
            </p>
            <Link href = "/login">
              <a className = "btn btn-primary btn-sm">Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;
