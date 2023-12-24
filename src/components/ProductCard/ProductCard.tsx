import styles from './ProductCard.module.css'
import {ProductCardProps} from "./ProductCard.props.ts";
import {Link} from "react-router-dom";

export const ProductCard = ({id, title, price, rating, image, description}: ProductCardProps) => {
    return (
        <Link to={'/'} className={styles['link']} >
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url('${image}')`}}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>₽</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src="/add-to-cart-icon.svg" alt="add-to-cart"/>
                    </button>
                    <div className={styles['rating']}>
                        {rating}&nbsp;
                        <img src="/rating-star.svg" alt="rating-star"/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{title}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>
        </Link>

    );
};
