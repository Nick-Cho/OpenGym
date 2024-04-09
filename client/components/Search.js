import {useState,useContext} from "react";
import {UserContext} from "../context/index";
import axios from 'axios';
import SuggestedFollowers from "../components/cards/SuggestedFollowers";
import {toast} from "react-toastify"
function Search() {
  const [state,setState] = useContext(UserContext);
  const [query, setQuery] = useState("") //tracks the search bar user input
  const [result, setResult] = useState([]);
  const searchUser = e =>{
    e.preventDefault();
    //console.log(`Find ${query} from database`)
    try{
      const response = {};
     axios.get(`/search-user/${query}`).then((r)=>{
      response = r;  
      //console.log("search user response: ", response);
      setResult(response.data);
      // console.log("Result: ", result)
       });
    } catch (err) {
      console.log(err);
    }
  }

  const handleFollow =  async (user) => {
    //console.log("handle follow user: ", user);
    try{
      const response = {};
      await axios.put('/user-follow', {_id: user._id})
      .then((r) => {
          response = r;
        });
      // console.log("reseponse from handlefollow", response)
      // update local storage, update user, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = response.data;
      localStorage.setItem("auth", JSON.stringify(auth));

      // update context
      
      setState({...state, user: response.data});
      console.log("logging from handle follow. User: ", state.user);
      //update suggested follower state
      let filtered = result.filter((p)=>{p._id !== user._id});
      setResult(filtered);
      
      toast.success(`Following ${user.username}`);

    } catch(err){
      console.log(err);
    }
  }
   const handleUnfollow = async (user) => {
    try {
      const response = await axios.put("/user-unfollow", {_id: user._id});
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = response.data;
      localStorage.setItem("auth", JSON.stringify(auth));

      // update context
      setState({...state, user: response.data});

      //update suggested follower state
      let filtered = result.filter((p)=>{p._id !== user._id});
      setResult(filtered);
      toast.error(`Unfollowed ${user.username}`);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form 
      className = "form-inline row" 
      onSubmit = {searchUser}
      >
        <div className = "col-8">
          <input 
          onChange= {(e)=>{
            setQuery(e.target.value);
          }} 
          value = {query}
          className = "form-control bg-dark text-light"
          placeHolder="Search"
          style = {{boxShadow: "none", borderColor: "white"}}
          />
        </div> 
        
        <div className = "col-4">
          <button 
          className = "btn col-12 text-light" 
          style = {{outline: "2px solid white"}}
          type = "submit"
          >
            Submit
          </button>
        </div>
      </form>
      
      {result.length != 0 &&
      <SuggestedFollowers 
      people = {result} 
      handleFollow={handleFollow}
      handleUnfollow= {handleUnfollow}
      />
      }
    
    </>
  )
}

export default Search