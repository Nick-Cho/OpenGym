
import { useEffect, useState} from "react";
import axios from 'axios';
import Post from "../components/cards/Post";
import Head from "next/head";
import Link from "next/link"
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, {
  reconnection: true,
})
const Home = ({posts}) =>{
  
  const[newsFeed, setNewsFeed] = useState([]);
  
  useEffect(()=>{
    socket.on("new-post", (newPost)=> {
      setNewsFeed([newPost, ...posts]);
    })
    console.log("new newsfeed: ", newsFeed);
  },[socket])
  
  const head = () => {
    <Head>
      <title>A social network for artists </title>
      <meta 
      name="description" 
      content="A social network for artists"
      />
      <meta 
      property="og:description"
      content="A social network for artists"
      />
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content="Artraverse"/>
      <meta property="og:url" content="http://artraverse.com"/>
      <meta 
      property="og:image:secure_url" 
      content="http://artraverse.com/images/logo.png"/>
    </Head>
  }
  
  const collection = newsFeed.length > 0 ? newsFeed : posts;
  console.log(newsFeed);
  return(
    <div className = 'container-fluid' style = {{backgroundColor: "black"}}>
      
      <div className = "row" style = {{backgroundColor: "black"}}>
        <div className = 'col'>
          <h1 className = 'display-1 text-center py-5 text-light'>Gallery</h1>
          <div className = "row">
            {collection.map((post)=>(
              <div key={post._id} className = "col-md-4">
                <Link href={`/post/${post._id}`}>
                  <a>
                    <Post commentsCount = {2}singlePost = {false} key={post._id} post={post} home={true}/>
                  </a>
                </Link>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await axios.get('/posts');
  //console.log(response.data);
  return{
    props: {
      posts: response.data,
    }
  }
}

export default Home