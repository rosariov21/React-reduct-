import React , {useEffect} from 'react';
import { connect } from 'react-redux'
// Bring in the Asynchronous FetchPosts action
import {fetchPosts} from '../actions/postsActions'
import {Post} from '../component/Post'
// Redux state is now in the props of this component
const PostsPage =({dispatch, loading, posts, hasErrors})=> {
   useEffect(()=>{
       dispatch(fetchPosts())
   },[dispatch])
//    Show loading, error, or success fetch
const renderPosts = ()=>{
    if (loading) {
        return <p> One Sec...Loading Posts</p>
    }
    if(hasErrors){
        return <p>Unable to display Posts</p>
    }
    return posts.map((post)=> <Post key={post.id} post={post}/>)
}
    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}
// Map Redux state to the React component Props
const mapStateToProps = (state)=>({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors
})
// Connecting Redux to React
export default connect(mapStateToProps)(PostsPage)