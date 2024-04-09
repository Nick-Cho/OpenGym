


function CommentForm({addComment, comment, setComment}) {
  return(
    <form onSubmit = {addComment}>
          <input 
          type = "text" 
          className = "form-control" 
          placeHolder="Add a comment" 
          value={comment}
          onChange = {(e)=>{setComment(e.target.value)}}
          />
          <button className = "btn btn-primary btn-sm btn-block mt-3">
            Submit
            </button>
        </form>
  ) 

}

export default CommentForm;
