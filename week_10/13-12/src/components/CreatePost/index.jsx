import styles from './CreatePost.module.scss';
import { useState, useEffect } from 'react';
import { httpPost } from '../../libs/http'

const CreatePost = () => {

    const [authorInput, setAuthorInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [formPostObj, setformPostObj] = useState({});

    // const handleAuthor = (e) => {
    //     setAuthorInput(e.target.value);
    // }
    // const handleImg = (e) => {
    //     setImgInput(e.target.value);
    // }
    // const handleMessage = (e) => {
    //     setMessageInput(e.target.value);
    // }
    const handleBtn = (e) => {
        e.preventDefault();
        httpPost('/posts', formPostObj)
        console.log(formPostObj);
    }

    useEffect(() => {
        setformPostObj(
            {
                author: authorInput,
                text: messageInput,
                date: new Date().toISOString(),
                photo: imgInput,
            }
        );
    },
        [authorInput, imgInput, messageInput]
    )

    return (
        <div className={styles.new_post}>
            <form>
                <input type='text' name='author' id='author' placeholder='AUTHOR' value={authorInput} onChange={(e) =>
                    setAuthorInput(e.target.value)
                } required />
                <input type='text' id='img' placeholder='URL IMAGE' value={imgInput} onChange={(e) =>
                    setImgInput(e.target.value)} />
                <button type='submit' onClick={handleBtn}>SEND</button>
                <textarea type='text' id='message' cols='30' rows='10' placeholder='MESSAGE' value={messageInput} onChange={(e) =>
                    setMessageInput(e.target.value)} required />
            </form>
        </div >
    )
}

export default CreatePost;