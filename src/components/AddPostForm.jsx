import { useState, } from "react"
import { useDispatch,useSelector } from "react-redux"

import { selectAllUsers } from "../features/users/userSlice"
import { postAdded} from "../features/posts/postSlice"

const AddPostForm = () => {

const [title, setTitle] = useState('')
const [content, setContent]=useState('')
const [userId, setUserId]=useState('')

const users = useSelector(selectAllUsers)

const dispatch = useDispatch()

const onSavePostClicked = (() => {
  if(title&&content){
    dispatch(
        postAdded(title,content,userId)
    )

    setTitle('')
    setContent('')
  
  }

})

const canSave = Boolean(title)&&Boolean(content)&&Boolean(userId)

const userOptions =users.map(user=>(
    <option  key={user.id} value={user.id} >
        {user.name}
    </option>
))



  return (
    <section className="flex flex-col justify-center items-center bg-amber-300 p-6 border-4 border-white w-96 m-auto rounded-2xl  ">
        <h2 className="text-2xl font-bold p-2">Add a new Post</h2>
        <form className="flex flex-col gap-2 "> 
         <label htmlFor="postTitle">Post Title:</label>
         <input className="border-2 bg-white w-64"
         type="text"
         id='postTitle'
         name='postTitle'
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
          />
        <label htmlFor="postAuthor">Author:</label>
        <select value={userId} id="postAuthor " onChange={(e)=>setUserId(e.target.value)} className="bg-white border-2">
        <option value=""></option>
        {userOptions}
        </select>


        <label htmlFor="postContent">Content:</label>
        <textarea className="border-2 bg-white w-80 h-36"
         name="postContent" 
         id="postContent"
         value={content}
         onChange={(e)=>setContent(e.target.value)}
         >

         </textarea>
         <button className="bg-green-500 text-white rounded-2xl border-2 border-white text-2xl p-1 m-4 hover:bg-green-700"
          onClick={onSavePostClicked} 
          type='button' 
          disabled={!canSave}>Save Post</button>


        </form>








    </section>
  )
}

export default AddPostForm