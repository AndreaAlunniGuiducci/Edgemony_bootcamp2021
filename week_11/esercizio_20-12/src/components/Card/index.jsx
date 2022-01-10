import styles from './Card.module.scss'

const Card = (props) => {
    const data = props.data || {
        title: 'title',
        price: '$$',
        description: 'description',
        image: 'image'
    };

    return (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} />
            <p>{data.description}</p>
            <p>{`${data.price}$`}</p>
        </div>
    )
}

export { Card };