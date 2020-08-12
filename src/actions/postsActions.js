export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
//Create redux action using action creators (using action creators)
export const getPosts = () => ({
    type: GET_POSTS,
})
export const getPostSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})
export const getPostFailure = () => ({
    type: GET_POSTS_FAILURE,
})
//Comobine all actions in an Asynchronous thunk
export function fetchPosts() {
    return async (dispatch) => {
        dispatch(getPosts())
    try {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        dispatch(getPostSuccess(data))
    }   catch (error) {
        dispatch(getPostFailure())
    }
  }
}
