import { useSelector } from "react-redux"
import { selectAllPosts } from "../features/posts/postSlice"

import PostAuther from "./PostAuther"





const PostsList = () => {

const posts =useSelector(selectAllPosts)

const renderedPosts = posts.map(post=>(
<article key={post.id} className="border-2 rounded-2xl p-4 m-6 bg-white hover:scale-110"> 
<h3 className="text-2xl font-bold">{post.title}</h3>
<p>{post.content.substring(0,100)}</p>
<p><PostAuther userId={post.userId} /></p>

</article>


))



  return (
 <section className="flex flex-col justify-center items-center gap-4 p-6 border-4 border-white w-96 m-auto rounded-2xl bg-[#FFCF71] mt-4 ">
  <h2 className="border-2 rounded-2xl text-3xl p-2 bg-white">posts</h2>
  <div >
    {renderedPosts}
  </div>
</section>
  )
}

export default PostsList