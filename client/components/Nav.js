import {useContext, useEffect, useState} from "react";
import Link from 'next/link';
import {UserContext} from '../context/index';
import {useRouter} from "next/router";
import {Avatar} from "antd"
import {imageSource} from '../functions/index'
function Nav () {
  const [state, setState] = useContext(UserContext);
  const [currPage, setCurrPage] = useState("");
  const router = useRouter();

  useEffect(()=>{
    //Only updating if we are in client mode of nextjs
    process.browser && setCurrPage(window.location.pathname); 
    console.log("state on reload:",state);
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null); //resetting user information
    // console.log(state);
    router.push("/login");
    
  }

  return (
  <nav className="nav p-3 bg-dark" >  
    
      <Link href = "/" >
        <a className ={`nav-link text-light`}>
          Home
        </a>
      </Link>
     
      {state ? (
        <>
          {/* <Link href = "/user/profile" >
            <a className = {`nav-link text-light`}>Profile</a>
          </Link>    */}
         
            <Link href = "/user/feed" >
              <a className = {`nav-link text-light`}>Feed</a>
            </Link>   
            
            
            <div className="dropdown" aria-labelledby="dropdownMenuButton">
              <button 
              className="btn dropdown-toggle " 
              type="button" id="dropdownMenuButton" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"  
              style = {{boxShadow: "none"}}>
                {state.user != "" &&( 
                  <Avatar src={imageSource(state.user)}/>
                )}
              </button>
              <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link href = "/user/profile" >
                    <a className = {`nav-link bg-transparent text-light dropdown-item`}>Profile</a>
                  </Link>    
                </li>
                
                <li>
                  <Link href = "/user/editProfile" >
                    <a className = {`nav-link dropdown-item text-light bg-transparent`}>Update Profile</a>
                  </Link>    
                </li>
                <li><a onClick = {logout} className = "dropdown-item text-light bg-transparent nav-link"> Logout </a></li>
              </ul>
            </div>
          {/* <a onClick = {logout} className ="navbar-nav nav-link text-light"> Logout </a>  */}
         
        </>
      )
      :
      (
      <>
        <Link href = "/login" >
          <a className ={`nav-link text-light`}>Login</a>
        </Link>    
        <Link href = "/register" >
          <a className ={`nav-link text-light`}>Register</a>
        </Link>
      </>
      )}
      
  </nav>

  )
}
export default Nav;