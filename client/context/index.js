import {useState, createContext, useEffect} from "react"
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  //attempting to get authentication key from local storage on startup
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem('auth')));
  }, []);

  const router = useRouter();
 
  const token = state && state.token ? state.token : " ";

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  axios.defaults.headers.common["Authorization"] =  `Bearer ${token}`;
  // Forcing user to log in if login token has expired
  axios.interceptors.response.use(
    function (response) {
    return response;
  }, 
  function (error) {
    // Do something with request error
    let res = error.response;
    //console.log(error);
    //console.log("axios interceptor error", error);
    if (res && res.status && res.status === 401 && !res.config.__isRetryRequest){
      setState({user: {}, token: ""});
      window.localStorage.removeItem("auth");
      router.push("/login");
    }
    else{
      return error.response;
    }

  });

  return(
    <UserContext.Provider value = {[state,setState]}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};