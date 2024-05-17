import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {

    const [enterBody, setEnterBody] = useState('');
    const [enterAuthor, setEnterAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnterBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnterAuthor(event.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}/>
                </Modal>
            )}

            <ul className={classes.posts}>
                <Post author={enterAuthor} body={enterBody}/>
                <Post author="Jenny" body="check here!"/>
                <Post author="James" body="Hello, my name is James!"/>
            </ul>
        </>
    );
}

export default PostsList;