// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { deletePost } from '../ajax-requests';

// function DeletePost({ token, getPosts }) {
//   const navigate = useNavigate();
//   const { postId } = useParams();
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleDelete = async () => {
//     const results = await deletePost(postId, token);
//     if (results.success) {
//       getPosts();
//       navigate('/delete-post');
//     } else {
//       setErrorMessage(results.error.message);
//     }
//   };

//   return (
//     <>
//       {errorMessage && <p>{errorMessage}</p>}
//       <button onClick={handleDelete}>Delete Post</button>
//     </>
//   );
// }

// export default DeletePost;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost, deletePost } from '../ajax-requests';

function DeletePost({ posts, token, getPosts }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  // console.log("params 'id' value: ", postId);
  const [post] = posts.filter((post) => post._id === postId );
  
  const { title, description, price, location, willDeliver } = post ? post : {};
  
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [updatedLocation, setLocation] = useState(location);
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
  const [errorMessage, setErrorMessage] = useState('');
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const updatedPost = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
      location: updatedLocation,
      willDeliver: updatedWillDeliver
    }
    
    const results = await updatePost(postId, token, updatedPost);
    if (results.success) {
      getPosts();
      navigate('/delete-post');
    } else {
      setErrorMessage(results.error.message)
    }
  }
  
  
  return (
    <>
      {post ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
              type="text"
              value={updatedPrice}
              onChange={(ev) => setPrice(ev.target.value)}
            />
            <input
              type="text"
              value={updatedLocation}
              onChange={(ev) => setLocation(ev.target.value)}
            />
            <input
              type="checkbox"
              checked={updatedWillDeliver}
              onChange={() => setWillDeliver(!updatedWillDeliver)}
            />
            <button type='submit'>Save Changes</button>
            <button onClick= {() => deletePost(postId, token)}>Delete</button>
          </form>
          {
            errorMessage && <p>{errorMessage}</p>
          }
        </>
      ) : (
        <h1>Post Does Not Exist.</h1>
      )}
    </>
  );
}

export default DeletePost;