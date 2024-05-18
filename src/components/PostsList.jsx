import NewPost from '../routes/NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function PostsList({isPosting}) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal>
                    <NewPost />
                </Modal>
            )}

            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post) =>
                    <Post key={post.body} author={post.author} body={post.body} />
                )}
            </ul>
            )}

            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There is no post yet</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;