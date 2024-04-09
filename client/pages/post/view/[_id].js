import axios from 'axios';
import Post from "../../../components/cards/Post";
import Head from "next/head";

const SinglePost = ({post}) =>{
  
  
  const head = () => {
    <Head>
      <title>A social network for artists</title>
      <meta 
      name="description" 
      content={post.content}
      />
      <meta 
      property="og:description"
      content="A social network for artists"
      />
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content="Artraverse"/>
      <meta property="og:url" content={`http://artaverse.com/post/view/${post._id}`}/>
      <meta 
      property="og:image:secure_url" 
      content={`${post.image.url}`}/>
    </Head>
  }
  
  return(
    <div className = 'container'>
      <div className = "row">
        <div className = 'col'>
          <h1 className = 'display-1 text-center py-5'>Home page</h1>
          <div className = "row">
            <div className = "col-md-4">
              <Post key={post._id} post={post} home={true}/>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
    //context gives you access to what would be "req" in backend
  const response = await axios.get(`/post/${context.params._id}`);
  //console.log(response.data);
  return{
    props: {
      post: response.data,
    }
  }
}

export default SinglePost