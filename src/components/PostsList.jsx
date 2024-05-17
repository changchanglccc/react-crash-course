import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostsList() {
    const [enterBody, setEnterBody] = useState('');
    const [enterName, setEnterName] = useState('');

    function changeBodyHandler(event) {
        setEnterBody(event.target.value);
    }

    function changeNameHandler(event) {
        setEnterName(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={changeBodyHandler}
                    onNameChange={changeNameHandler}/>
            </Modal>

            <ul className={classes.posts}>
                <Post author={enterName} body={enterBody}/>
                <Post author="Jenny" body="check here!"/>
                <Post author="James" body="Hello, my name is James!"/>
            </ul>
        </>
    );
}

export default PostsList;