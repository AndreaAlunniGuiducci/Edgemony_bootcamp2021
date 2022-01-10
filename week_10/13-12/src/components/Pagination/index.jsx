import { PaginationItem } from "../PaginationItem";
import { http } from './../../libs/http'

const Pagination = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        http('/friends').then((data) => setFriendsList(data))
    }, []
    )

    return (
        <ul>
            <PaginationItem />
        </ul>

    )
}

export { Pagination };