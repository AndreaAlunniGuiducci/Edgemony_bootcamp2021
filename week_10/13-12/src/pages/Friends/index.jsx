import { useState, useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { CreateFriend } from "../../components/CreateFriends";
import { http } from "../../libs/http";
import { Pagination } from './../../components/Pagination'
import styles from "./Friends.module.scss";

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        http(`/friends?_page=${pagination}`).then((friendsList) => setFriendsList(friendsList));
    }, [pagination]);

    return (
        <div className={styles.Friends}>
            <CreateFriend />

            <div>
                <ul>
                    <li>
                        <button>{ }</button>
                    </li>
                </ul>
            </div>

            {friendsList.map((friend) => (
                <FriendPreview data={friend} key={friend.id} />
            ))}
        </div>
    );
};

export default Friends;