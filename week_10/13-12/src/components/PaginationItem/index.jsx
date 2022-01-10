const PaginationItem = ({ callback, pageNumber }) => {
    return (
        <li>
            <button onClick={callback}>{pageNumber}</button>
        </li>

    )
}

export { PaginationItem };