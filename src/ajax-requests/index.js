const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


// USER API REQUESTS =========================================================
export const registerUser = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user
      }),
    });
    const result = await response.json();
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};




export const login = async (user) => {
  
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user
      }),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};


export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};



// POSTS REQUEST ROUTES ==================================================
export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};


export const makePost = async (post, token) => {
  
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post
      }),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};


export const updatePost = async (postId, token, updatedPost) => {

  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updatedPost,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (postId) => {
  try {
      const response = await fetch( `${BASE_URL}/posts${postId}`, {
      method: 'DELETE',
      }
      );
      const result = await response.json();
      console.log(result);
      return result;
  } catch (err) {
      console.error(err);
  }
};

export const postMessage = async ( postId, message, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message
      })
    });
    
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
};