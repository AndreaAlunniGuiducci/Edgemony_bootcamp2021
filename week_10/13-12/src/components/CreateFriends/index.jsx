import styles from './CreateFriends.module.scss';
import { useState, useEffect } from 'react';
import { httpPost } from '../../libs/http'

const CreateFriend = () => {

    const [friendName, setFriendName] = useState('');
    const [friendPhoto, setFriendPhoto] = useState('');
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
        httpPost('/friends', formPostObj)
        console.log(formPostObj);
    }

    useEffect(() => {
        setformPostObj(
            {
                name: friendName,
                photo: friendPhoto,
            }
        );
    },
        [friendPhoto, friendName]
    )

    return (
        <div className={styles.new_post}>

            <form>

                <input type='text' name='friend' id='friend' placeholder='FRIEND' value={friendName} onChange={(e) =>
                    setFriendName(e.target.value)
                } required />

                <input type='text' id='img' placeholder='URL IMAGE' value={friendPhoto} onChange={(e) =>
                    setFriendPhoto(e.target.value)} />

                <button type='submit' onClick={handleBtn}>SEND</button>

            </form>
        </div >
    )
}

export { CreateFriend };