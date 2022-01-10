import styles from './MessagePreview.module.scss';
import { formatDistance } from 'date-fns';
import { it } from 'date-fns/locale';

const MessagePreview = (props) => {
    const data = props.data || { text: 'Lorem Ipsum', date: new Date(), sender: 'User' };

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p><small>{formatDistance(new Date(data.date), new Date(), { addSuffix: true, locale: it })}</small></p>
            <p>{data.text}</p>
        </div>
    )
}

export { MessagePreview };