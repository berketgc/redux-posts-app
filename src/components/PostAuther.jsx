import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/userSlice";





const PostAuther = ({userId}) => {
  
    const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === Number(userId));
  




  return (
   <span className="text-sm flex justify-end mt-4">by <span className="hover:underline ml-1 hover:cursor-pointer"> {author ? author.name : 'Unknown author'}  </span> </span>
  )
}

export default PostAuther