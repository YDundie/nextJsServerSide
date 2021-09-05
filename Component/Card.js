import cardStyles from '../styles/Card.module.css'
import Link from 'next/link'

function Card(props) {
    return (<div className={cardStyles.card}>
        <Link href={`/${props.id}`}>
            {props.children}
        </Link>

    </div>);
}

export default Card;