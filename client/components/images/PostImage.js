function PostImage({url, home}) {
  return (
    
    <div style = {{
        backgroundImage: "url(" + url + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: home ? "500px" : "900px",
      }}>

    </div>
   
  )
}

export default PostImage;
