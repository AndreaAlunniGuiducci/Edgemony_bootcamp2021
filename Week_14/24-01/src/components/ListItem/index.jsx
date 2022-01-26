import { memo } from "react";


const ListItem = memo(({ data }) => {
    return (
        <ul>
            {data.map((item) => (<img src={item.img} alt={item.img} key={item.img}></img>))}
        </ul>
    )
})

export default ListItem;