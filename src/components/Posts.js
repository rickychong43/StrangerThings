import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../ajax-requests';
import Message from "./Message"
const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


function Posts({ posts, token, getPosts}) {
  // console.log('from Posts component', posts)
  const handleDelete = async (postId) => {
    const deleted = await deletePost(postId)
    return deleted;

}
  
  return (
    <>
      {
        posts && posts.map((post) => {
          return (
            <Fragment key={post._id}>
              {
                post.isAuthor ? (
                  <>
                    <div id="posts">
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    </div>
                    <Link to={`/update-post/${post._id}`} ><button style = {{background: 'yellow'}}>Edit Post</button></Link>
                    <div>{<button id="deleteButton" onClick={() => handleDelete(post._id)}>Delete</button>}</div>
                  </>
                ) : (
                  <>
                    <div>
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    </div>
                    {/* <Message posts={posts } postId={post._id} token={token} getPosts={getPosts} /> */}
                    <Link to={`/message/${post._id}`} ><button style = {{background: 'green'}}>Send Message</button></Link>
                  </>
                )
              }
            </Fragment>
          )
        })
      }
    </>
  );
}

export default Posts;