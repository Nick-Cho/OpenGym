import {SyncOutlined} from "@ant-design/icons";

const ForgotPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  newPswd,
  setNewPswd,
  secret,
  setSecret,
  loading,
  page
}) => {
return(
  <form onSubmit = {handleSubmit} style={{backgroundColor: "black"}}>
    
    <div className = 'form group p-2'>
      <label className = 'text-muted form-text'> Email</label>
      <input value = {email} type = "email" style = {{borderColor: "gray"}} className = 'form-control bg-dark text-light' placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
    </div>

    <div className = 'form group p-2'>
      <label className = 'form-text text-muted'>
        New Password
      </label>
      <input value = {newPswd} type = "password" style = {{borderColor: "gray"}} className = 'form-control bg-dark text-light' placeholder="Enter New Password" onChange = {(e) => setNewPswd(e.target.value)}/>
    </div>

    {/* Only Rendered if the page is the register page */}

     
     <>
    <div className = 'form group p-2'>
      <label className ='form-text text-muted'>
        Pick a question to use for password recovery
      </label>
      <select className = "form-control bg-dark text-light" style = {{borderColor: "gray"}}>
        <option>What is your favourite color?</option>
        <option>What is the name of your first pet?</option>
        <option>What is your mother's maiden name?</option>
      </select>
    </div>

    <div className = 'form-group p-2'>
      <input value = {secret} type="text" placeholder= 'Answer' className = "form-control bg-dark text-light" style = {{borderColor: "gray"}} onChange= {(e) => setSecret(e.target.value)}/>
    </div>
    </>
  
    <div className = 'form-group p-2'>
      {/* Only disable button when email and password aren't present on the login page */}
      <button disabled = {!email || !newPswd || !secret} className = "btn btn-primary col">
       {loading ? <SyncOutlined spin className ="py-1" /> : "Submit"} 
      </button>
    </div>
  </form>
)}

export default ForgotPasswordForm