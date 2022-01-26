import styles from './Card.module.scss';

const Card = (props) => {
    const testo = props.testo;

    return (
        <div className={styles.cardContainer}>
            <p>{testo}</p>
            <p>Ciao</p>
            <p>Ciao</p>
            <p>Ciao</p>
            <p>Ciao</p>
            <p>Ciao</p>
            <p>Ciao</p>
        </div>
    )
}

export default Card;