import {SyncOutlined} from "@ant-design/icons";

const AuthForm = ({
  profileUpdate, //Tells the form whether we are on the profile update page or not
  username,
  setUsername,
  about,
  setAbout,
  handleSubmit,
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  pswd,
  setPswd,
  secret,
  setSecret,
  loading,
  page
}) => {
return(
  <form onSubmit = {handleSubmit} style={{backgroundColor:"black"}}>
      {profileUpdate &&
        <>
          <div className = 'form-group p-2'>
            <small>
              <label className = "text-muted"> Username </label>
            </small>
            <div className = 'row'>
              <div className = 'col-sm-12'>
                <input value = {username} type = "text" style={{borderColor:"gray"}} className = 'form-control bg-dark text-light' placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/>
              </div>
            </div>              
          </div>
          
          <div className = 'form-group p-2'>
            <small>
              <label className = "text-muted"> About </label>
            </small>
            <div className = 'row'>
              <div className = 'col-sm-12'>
              <input value = {about} type = "text" style={{borderColor:"gray"}} className = 'form-control bg-dark text-light' placeholder="Write about yourself" onChange = {(e) => setAbout(e.target.value)}/>
              </div>
            </div>              
          </div>
        </>
      }
      
    {page !== 'login' &&(
      <div className = 'form-group p-2'>
        <div className = 'row'>
          <div className = 'col-sm-6'>
            <small>
              <label className = "text-muted"> First Name </label>
            </small>
            <input value = {fname} type = "text" style={{borderColor:"gray"}} className = 'form-control bg-dark text-light' placeholder="First Name" onChange = {(e) => setFname(e.target.value)}/>
          </div>
          <div className = 'col-sm-6'>
            <small>
              <label className = "text-muted "> Last Name </label>
            </small>
            <input value = {lname} type = "text" style={{borderColor:"gray"}} className = 'form-control bg-dark text-light' placeholder = "Last Name" onChange = {(e) => setLname(e.target.value)}/>
          </div>  
        </div>              
      </div>
    )}

    <div className = 'form group p-2'>
      <small>
        <label className = "text-muted"> Email </label>
      </small>
      <input disabled = {profileUpdate} value = {email} type = "email" 
      className = 'form-control  bg-dark text-light' 
      style= {{borderColor: "gray"}} 
      placeholder="Enter your email" 
      onChange = {(e) => setEmail(e.target.value)}/>
      {page !== "login" &&
        <small className = 'form-text text-muted'>
        You can use letters, numbers and periods
      </small>
      }
    </div>

    <div className = 'form group p-2'>
      <small>
        <label className = "text-muted"> Password </label>
      </small>
      <input value = {pswd} type = "password" 
      className = 'form-control bg-dark text-light' 
      style= {{borderColor: "gray"}} 
      placeholder="Enter your password" 
      onChange = {(e) => setPswd(e.target.value)}/>
      {page !== "login" &&
        <small className = 'form-text text-muted'>
        Password must be at least 6 characters with. Use a mix of letters, numbers and symbols
      </small>
      }
    </div>

    {/* Only Rendered if the page is the register page */}
    {page !== "login" &&
     (
     <>
    <div className = 'form group p-2'>
      <select className = "form-control bg-dark text-light login-select" style = {{borderColor:"gray"}}>
        <option className = "login-option">What is your favourite color?</option>
        <option className = "login-option">What is the name of your first pet?</option>
        <option className = "login-option">What is your mother's maiden name?</option>
      </select>

      <small className ='form-text text-muted'>
        Pick a question to use for password recovery
      </small>
    </div>

    <div className = 'form-group p-2'>
      <input value = {secret} type="text" placeholder= 'Answer' style = {{borderColor:"gray"}} className = "form-control bg-dark text-light" onChange= {(e) => setSecret(e.target.value)}/>
    </div>
    </>
    )}

    <div className = 'form-group p-2'>
      {/* Only disable button when email and password aren't present on the login page */}
      <button disabled = { 
      profileUpdate ? 
      loading :
      page === "login" ?
      !email || !pswd:
      !fname || !lname || !email || !secret || !pswd} className = "btn btn-primary col">
        {profileUpdate == true && page !== "login" && (loading ? <SyncOutlined spin className ="py-1" /> : "Update") }
        {page !== "login" && profileUpdate == false && (loading ? <SyncOutlined spin className ="py-1" /> : "Create Account")}
        {page === "login" && (loading ? <SyncOutlined spin className ="py-1" /> : "Login")}
      </button>
    </div>
  </form>
)}

export default AuthForm