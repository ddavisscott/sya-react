import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( resp => resp.json())
        .then(posts => 
            dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
}; 