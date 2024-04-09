import {useState, useContext} from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal} from "antd";
import Link from 'next/link';
import {useRouter} from "next/router";
import AuthForm from '../components/forms/AuthForm.js';
import {UserContext} from '../context/index';
const Login = () => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [loading, setLoading] = useState(false);
  
  const [state, setState] = useContext(UserContext);

  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, {
    email,
    pswd,   
    });
    //console.log("Data received in login.js", response);
    //Updating global state
    if (response.status == 200){
      setState({
      user: response.data.user,
      token: response.data.token, 
      });
      //saving  token in local storage
      window.localStorage.setItem('auth', JSON.stringify(response.data));
      router.push("/user/profile"); //redirects user to home page
    }
    else if (response.status == 400){
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  //Bringing user to home page if there is already a JWT token
  if (state && state.token){
    router.push("/user/profile");
  }

  return (
    <div className = 'container-fluid min-vh-100' style ={{backgroundColor:"black", }}>
      <div className="row py-5">
        <div className ='col text-center'>
          <h1 className="text-light">Login</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <AuthForm 
          profileUpdate = {false}
          handleSubmit = {handleSubmit} 
          email={email}
          setEmail = {setEmail}
          pswd = {pswd}
          setPswd = {setPswd}
          loading = {loading}
          page = "login"
          />
        </div>
      </div>

      <div className = "row">
        <div className = "col">
          <p className = "text-center text-light">Not yet registered?{" "}
            <Link href = "/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>

      <div className = "row">
        <div className = "col">
          <p className = "text-center">
            <Link href = "/forgot-password">
              <a className = "text-danger">Forgot Password</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;