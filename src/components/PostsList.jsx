import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Jennifer" body="React is awesome!"/>
                <Post author="Jenny" body="check here!"/>
                <Post author="James" body="Hello, my name is James!"/>
            </ul>
        </>
    );
}

export default PostsList;