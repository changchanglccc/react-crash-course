import NewPost from '../routes/NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';
import { useLoaderData } from 'react-router-dom';

function PostsList({isPosting}) {

    const posts = useLoaderData();

    return (
        <>
            {isPosting && (
                <Modal>
                    <NewPost />
                </Modal>
            )}

            {posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post) =>
                    <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                )}
            </ul>
            )}

            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There is no post yet</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;